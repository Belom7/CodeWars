function personalise(campaign, person){
    campaign = campaign.replace(/<NAME>/g,person.name);
    campaign = campaign.replace(/<CITY>/g,person.city);
    campaign = campaign.replace(/<FAVOURITE\sPRODUCTS>/g,person.favourite_products);
    return campaign;
}