/**
 * entsoe-api-client
 * 
 * @file Example on getting forecaster generation within a country
 *       from ENTSO-e Rest API.
 * 
 * @author Hexagon <hexagon@GitHub>
 * @license MIT
 **/

// Deno import:
import { QueryGL, FirstAreaByIdentifier } from "../mod.ts";

// Node import:
// import { QueryGL } from "entsoe-api-client";

// Prepare dates
const
    dateToday = new Date(),
    dateTomorrow = new Date();
dateToday.setHours(0,0,0,0);
dateTomorrow.setDate(dateTomorrow.getDate()+1);
dateTomorrow.setHours(0,0,0,0);

// Run ENTSO-e transparency playform query
const result = await QueryGL(
    typeof process !== "undefined" ?  // Your entsoe api-token by environment variable
        process.env.API_TOKEN // ... in Node
        : Deno.env.get("API_TOKEN"), // ... in Deno
    {
        documentType: "A71",        // A71 - Generation forecast
        processType: "A01",         // A01 - Day ahead
        inDomain: FirstAreaByIdentifier("Sweden (SE)"), // FistAreaByIdentifier resolves to "10YSE-1--------K" which is also CTA|SE, MBA|SE etc...
        outDomain: FirstAreaByIdentifier("Sweden (SE)"),   
        startDateTime: dateToday,   // Start date
        endDateTime: dateTomorrow   // End date
    }
);

// Get first TimeSeries
const ts = result[0].timeseries[0];

// Print meta data
console.table({
    start: ts.periods[0].startDate.toISOString(),
    end: ts.periods[0].endDate.toISOString(),
    unit: ts.quantityMeasureUnit,
});

// Print spot prices per hour
console.table(ts.periods[0].points);
