const { csvConvert } = require("./csv-convert");
const { getCount, getData } = require("./request");


async function getActivities() {

    const activityHeadersCount = await getCount("ActivityHeaders");
    const activitiesHeaders = getData("ActivityHeaders", activityHeadersCount);

    const activitiesCount = await getCount("Activities");
    const activities = getData("Activities", activitiesCount);

    const activityCodesGroupTypesCount = await getCount("ActivityCodesGroupTypes");
    const activityCodesGroupTypes = getData("ActivityCodesGroupTypes", activityCodesGroupTypesCount);

    const activitiesPurposesCount = await getCount("Activities/Purposes");
    const activitiesPurposes = getData("Activities/Purposes", activitiesPurposesCount);

    const activitiesStatusesCount = await getCount("Activities/Statuses");
    const activitiesStatuses = getData("Activities/Statuses", activitiesStatusesCount);

    const activitiesTypesCount = await getCount("Activities/Types");
    const activitiesTypes = getData("Activities/Types", activitiesTypesCount);


    csvConvert("./files/Activities", activityHeadersCount, "ActivityHeaders-count");
    csvConvert("./files/Activities", activitiesHeaders, "ActivityHeaders", ['notes']);

    csvConvert("./files/Activities", activitiesCount, "Activities-count");
    csvConvert("./files/Activities", activities, "Activities", ['notes']);

    csvConvert("./files/Activities", activityCodesGroupTypesCount, "ActivityCodesGroupTypes-count");
    csvConvert("./files/Activities", activityCodesGroupTypes, "ActivityCodesGroupTypes");

    csvConvert("./files/Activities", activitiesPurposesCount, "ActivitiesPurposes-count");
    csvConvert("./files/Activities", activitiesPurposes, "ActivitiesPurposes");

    csvConvert("./files/Activities", activitiesStatusesCount, "ActivitiesStatuses-count");
    csvConvert("./files/Activities", activitiesStatuses, "ActivitiesStatuses");

    csvConvert("./files/Activities", activitiesTypesCount, "ActivitiesTypes-count");
    csvConvert("./files/Activities", activitiesTypes, "ActivitiesTypes");
}


async function getCampaigns() {

    const campaignHeadersCount = await getCount("CampaignHeaders");
    const campaignHeaders = getData("CampaignHeaders", campaignHeadersCount);

    const campaignsCount = await getCount("Campaigns");
    const campaigns = getData("Campaigns", campaignsCount);


    csvConvert("./files/Campaigns", campaignHeadersCount, "CampaignHeaders-count");
    csvConvert("./files/Campaigns", campaignHeaders, "CampaignHeaders", ['campaigndescription']);

    csvConvert("./files/Campaigns", campaignsCount, "Campaigns-count");
    csvConvert("./files/Campaigns", campaigns, "Campaigns", ['description']);
}


async function getCounties() {

    const countiesCount = await getCount("Counties");
    const counties = getData("Counties", countiesCount);


    csvConvert("./files/Counties", countiesCount, "Counties-count");
    csvConvert("./files/Counties", counties, "Counties", ['description']);
}


async function getCustomers() {

    const customerCount = await getCount("Customers");
    const customers = getData("Customers", customerCount);

    const customerARCount = await getCount("Customers/AR");
    const customersAR = getData("Customers/AR", customerARCount);

    const customerPARCount = await getCount("CustomerPAR");
    const CustomerPAR = getData("CustomerPAR", customerPARCount);


    csvConvert("./files/Customers", customerCount, "Customers-count");
    csvConvert("./files/Customers", customers, "Customers");

    csvConvert("./files/Customers", customerARCount, "Customers-AR-count");
    csvConvert("./files/Customers", customersAR, "Customers-AR");

    csvConvert("./files/Customers", customerPARCount, "Customer-PAR-count");
    csvConvert("./files/Customers", CustomerPAR, "Customer-PAR");
}


async function getDivisions() {

    const divisionsCount = await getCount("Divisions");
    const divisions = getData("Divisions", divisionsCount);


    csvConvert("./files/Divisions", divisionsCount, "Divisions-count");
    csvConvert("./files/Divisions", divisions, "Divisions");
}


async function getLostSales() {

    const lostSalesCount = await getCount("LostSales");
    const lostSales = getData("LostSales", lostSalesCount);


    csvConvert("./files/Lost-Sales", lostSalesCount, "LostSales-count");
    csvConvert("./files/Lost-Sales", lostSales, "LostSales");
}


async function getOpportunities() {

    const opportunitiesCount = await getCount("Opportunities");
    const opportunities = getData("Opportunities", opportunitiesCount);

    const opportunityStageCount = await getCount("OpportunityCodesStages");
    const opportunityStages = getData("OpportunityCodesStages", opportunityStageCount);

    const opportunityCodesTypesCount = await getCount("OpportunityCodesTypes");
    const opportunityCodesTypes = getData("OpportunityCodesTypes", opportunityCodesTypesCount);

    const opportunityHeadersCount = await getCount("OpportunityHeaders");
    const opportunityHeaders = getData("OpportunityHeaders", opportunityHeadersCount);

    const opportunitiesPhasesCount = await getCount("Opportunities/Phases");
    const opportunitiesPhases = getData("Opportunities/Phases", opportunitiesPhasesCount);

    const opportunityProductItemsCount = await getCount("OpportunityProductItems");
    const opportunityProductItems = getData("OpportunityProductItems", opportunityProductItemsCount);


    csvConvert("./files/Opportunities", opportunitiesCount, "Opportunities-count");
    csvConvert("./files/Opportunities", opportunities, "Opportunities", [
        'productGroups',
        'notes'
    ]);

    csvConvert("./files/Opportunities", opportunityStageCount, "OpportunityCodesStages-count");
    csvConvert("./files/Opportunities", opportunityStages, "OpportunityCodesStages");

    csvConvert("./files/Opportunities", opportunityCodesTypesCount, "OpportunityCodesTypes-count");
    csvConvert("./files/Opportunities", opportunityCodesTypes, "OpportunityCodesTypes");

    csvConvert("./files/Opportunities", opportunityHeadersCount, "OpportunityHeaders-count");
    csvConvert("./files/Opportunities", opportunityHeaders, "OpportunityHeaders", ['comment']);

    csvConvert("./files/Opportunities", opportunitiesPhasesCount, "Opportunities-Phases-count");
    csvConvert("./files/Opportunities", opportunitiesPhases, "Opportunities-Phases");

    csvConvert("./files/Opportunities", opportunityProductItemsCount, "OpportunityProductItems-count");
    csvConvert("./files/Opportunities", opportunityProductItems, "OpportunityProductItems", ['Comment']);
}


async function getEquipment() {

    const pipeAreasCount = await getCount("PipeAreas");
    const pipeAreas = getData("PipeAreas", pipeAreasCount);

    const pipeBaseModelsCount = await getCount("PipeBaseModels");
    const pipeBaseModels = getData("PipeBaseModels", pipeBaseModelsCount);

    const pipeFamiliesCount = await getCount("PipeFamilies");
    const pipeFamilies = getData("PipeFamilies", pipeFamiliesCount);

    const pipeModelsCount = await getCount("PipeModels");
    const pipeModels = getData("PipeModels", pipeModelsCount);

    csvConvert("./files/Equipment", pipeAreasCount, "PipeAreas-count");
    csvConvert("./files/Equipment", pipeAreas, "PipeAreas");

    csvConvert("./files/Equipment", pipeBaseModelsCount, "PipeBaseModels-count");
    csvConvert("./files/Equipment", pipeBaseModels, "PipeBaseModels");

    csvConvert("./files/Equipment", pipeFamiliesCount, "PipeFamilies-count");
    csvConvert("./files/Equipment", pipeFamilies, "PipeFamilies");

    csvConvert("./files/Equipment", pipeModelsCount, "PipeModels-count");
    csvConvert("./files/Equipment", pipeModels, "PipeModels");
}


async function getPartsAndServiceQuotes() {

    const PSQuoteHeadersCount = await getCount("PSQuoteHeaders");
    const PSQuoteHeaders = getData("PSQuoteHeaders", PSQuoteHeadersCount);


    csvConvert("./files/Parts-and-Service-Quotes", PSQuoteHeadersCount, "PSQuoteHeaders-count");
    csvConvert("./files/Parts-and-Service-Quotes", PSQuoteHeaders, "PSQuoteHeaders", [
        'QuoteStatusComment',
        'QuoteDescription',
        'OppComment',
        'ShopInstruction',
        'Comments'
    ])
}


async function getMachineQuotes() {

    const quoteHeadersCount = await getCount("QuoteHeaders");
    const quoteHeaders = getData("QuoteHeaders", quoteHeadersCount);

    const quoteCodesTypesCount = await getCount("QuoteCodesTypes");
    const quoteCodesTypes = getData("QuoteCodesTypes", quoteCodesTypesCount);

    const quoteCodesStatusesCount = await getCount("QuoteCodesStatuses");
    const quoteCodesStatuses = getData("QuoteCodesStatuses", quoteCodesStatusesCount);


    csvConvert("./files/Machine-Quotes", quoteHeadersCount, "QuoteHeaders-count");
    csvConvert("./files/Machine-Quotes", quoteHeaders, "QuoteHeaders", ['cancellationcomment']);

    csvConvert("./files/Machine-Quotes", quoteCodesTypesCount, "QuoteCodesTypes-count");
    csvConvert("./files/Machine-Quotes", quoteCodesTypes, "QuoteCodesTypes");

    csvConvert("./files/Machine-Quotes", quoteCodesStatusesCount, "QuoteCodesStatuses-count");
    csvConvert("./files/Machine-Quotes", quoteCodesStatuses, "QuoteCodesStatuses");
}


async function getRegions() {

    const regionsCount = await getCount("Regions");
    const regions = getData("Regions", regionsCount);


    csvConvert("./files/Regions", regionsCount, "Regions-count");
    csvConvert("./files/Regions", regions, "Regions");
}


async function getSalesReps() {

    const salesLinkSalesRepTypeDescsCount = await getCount("SalesLinkSalesRepTypeDescs");
    const salesLinkSalesRepTypeDescs = getData("SalesLinkSalesRepTypeDescs", salesLinkSalesRepTypeDescsCount);

    const salesrepsCount = await getCount("Salesreps");
    const salesreps = getData("Salesreps", salesrepsCount);


    csvConvert("./files/Sales-Reps", salesLinkSalesRepTypeDescsCount, "SalesLinkSalesRepTypeDescs-count");
    csvConvert("./files/Sales-Reps", salesLinkSalesRepTypeDescs, "SalesLinkSalesRepTypeDescs");

    csvConvert("./files/Sales-Reps", salesrepsCount, "SalesLinkSalesRepTypeDescs-count");
    csvConvert("./files/Sales-Reps", salesreps, "SalesLinkSalesRepTypeDescs");
}




function generateData() {
    getActivities();
    getCampaigns();
    getCounties();
    getCustomers();
    getDivisions();
    getLostSales();
    getOpportunities();
    getEquipment();
    getPartsAndServiceQuotes();
    getMachineQuotes();
    getRegions();
    getSalesReps();
}

module.exports = { generateData };