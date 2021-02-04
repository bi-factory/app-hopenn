const { csvConvert } = require('./csv-convert');
const { getCount, getData } = require('./request');


async function getActivities() {

    const activityHeadersCount = await getCount('ActivityHeaders');
    const activitiesHeaders = getData('ActivityHeaders', activityHeadersCount);

    const activitiesCount = await getCount('Activities');
    const activities = getData('Activities', activitiesCount);

    const activityCodesGroupTypesCount = await getCount('ActivityCodesGroupTypes');
    const activityCodesGroupTypes = getData('ActivityCodesGroupTypes', activityCodesGroupTypesCount);

    const activitiesPurposesCount = await getCount('Activities/Purposes');
    const activitiesPurposes = getData('Activities/Purposes', activitiesPurposesCount);

    const activitiesStatusesCount = await getCount('Activities/Statuses');
    const activitiesStatuses = getData('Activities/Statuses', activitiesStatusesCount);

    const activitiesTypesCount = await getCount('Activities/Types');
    const activitiesTypes = getData('Activities/Types', activitiesTypesCount);


    csvConvert('./files/Activities', 'ActivityHeaders-count', activityHeadersCount);
    csvConvert('./files/Activities', 'ActivityHeaders', await activitiesHeaders, ['notes']);

    csvConvert('./files/Activities', 'Activities-count', activitiesCount);
    csvConvert('./files/Activities', 'Activities', await activities, ['notes']);

    csvConvert('./files/Activities', 'ActivityCodesGroupTypes-count', activityCodesGroupTypesCount);
    csvConvert('./files/Activities', 'ActivityCodesGroupTypes', await activityCodesGroupTypes);

    csvConvert('./files/Activities', 'ActivitiesPurposes-count', activitiesPurposesCount);
    csvConvert('./files/Activities', 'ActivitiesPurposes', await activitiesPurposes);

    csvConvert('./files/Activities', 'ActivitiesStatuses-count', activitiesStatusesCount);
    csvConvert('./files/Activities', 'ActivitiesStatuses', await activitiesStatuses);

    csvConvert('./files/Activities', 'ActivitiesTypes-count', activitiesTypesCount);
    csvConvert('./files/Activities', 'ActivitiesTypes', await activitiesTypes);
}


async function getCampaigns() {

    const campaignHeadersCount = await getCount('CampaignHeaders');
    const campaignHeaders = getData('CampaignHeaders', campaignHeadersCount);

    const campaignsCount = await getCount('Campaigns');
    const campaigns = getData('Campaigns', campaignsCount);


    csvConvert('./files/Campaigns', 'CampaignHeaders-count', campaignHeadersCount);
    csvConvert('./files/Campaigns', 'CampaignHeaders', await campaignHeaders, ['campaigndescription']);

    csvConvert('./files/Campaigns', 'Campaigns-count', campaignsCount);
    csvConvert('./files/Campaigns', 'Campaigns', await campaigns, ['description']);
}


async function getCounties() {

    const countiesCount = await getCount('Counties');
    const counties = getData('Counties', countiesCount);


    csvConvert('./files/Counties', 'Counties-count', countiesCount);
    csvConvert('./files/Counties', 'Counties', await counties, ['description']);
}


async function getCustomers() {

    const customerCount = await getCount('Customers');
    const customers = getData('Customers', customerCount);

    const customerARCount = await getCount('Customers/AR');
    const customersAR = getData('Customers/AR', customerARCount);

    const customerPARCount = await getCount('CustomerPAR');
    const CustomerPAR = getData('CustomerPAR', customerPARCount);


    csvConvert('./files/Customers', 'Customers-count', customerCount);
    csvConvert('./files/Customers', 'Customers', await customers);

    csvConvert('./files/Customers', 'Customers-AR-count', customerARCount);
    csvConvert('./files/Customers', 'Customers-AR', await customersAR);

    csvConvert('./files/Customers', 'Customer-PAR-count', customerPARCount);
    csvConvert('./files/Customers', 'Customer-PAR', await CustomerPAR);
}


async function getDivisions() {

    const divisionsCount = await getCount('Divisions');
    const divisions = getData('Divisions', divisionsCount);


    csvConvert('./files/Divisions', 'Divisions-count', divisionsCount);
    csvConvert('./files/Divisions', 'Divisions', await divisions);
}


async function getLostSales() {

    const lostSalesCount = await getCount('LostSales');
    const lostSales = getData('LostSales', lostSalesCount);


    csvConvert('./files/Lost-Sales', 'LostSales-count', lostSalesCount);
    csvConvert('./files/Lost-Sales', 'LostSales', await lostSales);
}


async function getOpportunities() {

    const opportunitiesCount = await getCount('Opportunities');
    const opportunities = getData('Opportunities', opportunitiesCount);

    const opportunityStageCount = await getCount('OpportunityCodesStages');
    const opportunityStages = getData('OpportunityCodesStages', opportunityStageCount);

    const opportunityCodesTypesCount = await getCount('OpportunityCodesTypes');
    const opportunityCodesTypes = getData('OpportunityCodesTypes', opportunityCodesTypesCount);

    const opportunityHeadersCount = await getCount('OpportunityHeaders');
    const opportunityHeaders = getData('OpportunityHeaders', opportunityHeadersCount);

    const opportunitiesPhasesCount = await getCount('Opportunities/Phases');
    const opportunitiesPhases = getData('Opportunities/Phases', opportunitiesPhasesCount);

    const opportunityProductItemsCount = await getCount('OpportunityProductItems');
    const opportunityProductItems = getData('OpportunityProductItems', opportunityProductItemsCount);


    csvConvert('./files/Opportunities', 'Opportunities-count', opportunitiesCount);
    csvConvert('./files/Opportunities', 'Opportunities', await opportunities, [
        'productGroups',
        'notes'
    ]);

    csvConvert('./files/Opportunities', 'OpportunityCodesStages-count', opportunityStageCount);
    csvConvert('./files/Opportunities', 'OpportunityCodesStages', await opportunityStages);

    csvConvert('./files/Opportunities', 'OpportunityCodesTypes-count', opportunityCodesTypesCount);
    csvConvert('./files/Opportunities', 'OpportunityCodesTypes', await opportunityCodesTypes);

    csvConvert('./files/Opportunities', 'OpportunityHeaders-count', opportunityHeadersCount);
    csvConvert('./files/Opportunities', 'OpportunityHeaders', await opportunityHeaders, ['comment']);

    csvConvert('./files/Opportunities', 'Opportunities-Phases-count', opportunitiesPhasesCount);
    csvConvert('./files/Opportunities', 'Opportunities-Phases', await opportunitiesPhases);

    csvConvert('./files/Opportunities', 'OpportunityProductItems-count', opportunityProductItemsCount);
    csvConvert('./files/Opportunities', 'OpportunityProductItems', await opportunityProductItems, ['Comment']);
}


async function getEquipment() {

    const pipeAreasCount = await getCount('PipeAreas');
    const pipeAreas = getData('PipeAreas', pipeAreasCount);

    const pipeBaseModelsCount = await getCount('PipeBaseModels');
    const pipeBaseModels = getData('PipeBaseModels', pipeBaseModelsCount);

    const pipeFamiliesCount = await getCount('PipeFamilies');
    const pipeFamilies = getData('PipeFamilies', pipeFamiliesCount);

    const pipeModelsCount = await getCount('PipeModels');
    const pipeModels = getData('PipeModels', pipeModelsCount);

    csvConvert('./files/Equipment', 'PipeAreas-count', pipeAreasCount);
    csvConvert('./files/Equipment', 'PipeAreas', await pipeAreas);

    csvConvert('./files/Equipment', 'PipeBaseModels-count', pipeBaseModelsCount);
    csvConvert('./files/Equipment', 'PipeBaseModels', await pipeBaseModels);

    csvConvert('./files/Equipment', 'PipeFamilies-count', pipeFamiliesCount);
    csvConvert('./files/Equipment', 'PipeFamilies', await pipeFamilies);

    csvConvert('./files/Equipment', 'PipeModels-count', pipeModelsCount);
    csvConvert('./files/Equipment', 'PipeModels', await pipeModels);
}


async function getPartsAndServiceQuotes() {

    const PSQuoteHeadersCount = await getCount('PSQuoteHeaders');
    const PSQuoteHeaders = getData('PSQuoteHeaders', PSQuoteHeadersCount);


    csvConvert('./files/Parts-and-Service-Quotes', 'PSQuoteHeaders-count', PSQuoteHeadersCount);
    csvConvert('./files/Parts-and-Service-Quotes', 'PSQuoteHeaders', await PSQuoteHeaders, [
        'QuoteStatusComment',
        'QuoteDescription',
        'OppComment',
        'ShopInstruction',
        'Comments'
    ])
}


async function getMachineQuotes() {

    const quoteHeadersCount = await getCount('QuoteHeaders');
    const quoteHeaders = getData('QuoteHeaders', quoteHeadersCount);

    const quoteCodesTypesCount = await getCount('QuoteCodesTypes');
    const quoteCodesTypes = getData('QuoteCodesTypes', quoteCodesTypesCount);

    const quoteCodesStatusesCount = await getCount('QuoteCodesStatuses');
    const quoteCodesStatuses = getData('QuoteCodesStatuses', quoteCodesStatusesCount);


    csvConvert('./files/Machine-Quotes', 'QuoteHeaders-count', quoteHeadersCount);
    csvConvert('./files/Machine-Quotes', 'QuoteHeaders', await quoteHeaders, ['cancellationcomment']);

    csvConvert('./files/Machine-Quotes', 'QuoteCodesTypes-count', quoteCodesTypesCount);
    csvConvert('./files/Machine-Quotes', 'QuoteCodesTypes', await quoteCodesTypes);

    csvConvert('./files/Machine-Quotes', 'QuoteCodesStatuses-count', quoteCodesStatusesCount);
    csvConvert('./files/Machine-Quotes', 'QuoteCodesStatuses', await quoteCodesStatuses);
}


async function getRegions() {

    const regionsCount = await getCount('Regions');
    const regions = getData('Regions', regionsCount);


    csvConvert('./files/Regions', 'Regions-count', regionsCount);
    csvConvert('./files/Regions', 'Regions', await regions);
}


async function getSalesReps() {

    const salesLinkSalesRepTypeDescsCount = await getCount('SalesLinkSalesRepTypeDescs');
    const salesLinkSalesRepTypeDescs = getData('SalesLinkSalesRepTypeDescs', salesLinkSalesRepTypeDescsCount);

    const salesrepsCount = await getCount('Salesreps');
    const salesreps = getData('Salesreps', salesrepsCount);


    csvConvert('./files/Sales-Reps', 'SalesLinkSalesRepTypeDescs-count', salesLinkSalesRepTypeDescsCount);
    csvConvert('./files/Sales-Reps', 'SalesLinkSalesRepTypeDescs', await salesLinkSalesRepTypeDescs);

    csvConvert('./files/Sales-Reps', 'Salesreps-count', salesrepsCount);
    csvConvert('./files/Sales-Reps', 'Salesreps', await salesreps);
}




function generateData() {
  try {

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

  } catch (error) {
    console.log(error.message);
  }
}

module.exports = { generateData };
