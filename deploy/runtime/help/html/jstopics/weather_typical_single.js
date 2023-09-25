hmLoadTopic({
hmKeywords:"",
hmTitle:"Typical and Single Year",
hmDescription:"SAM can simulate systems using either typical year data representing the resource and weather at a given location over a multi-year period, or single-year data.",
hmPrevLink:"weather_data_elements.html",
hmNextLink:"weather_time_convention.html",
hmParentLink:"weather_data.html",
hmBreadCrumbs:"<a href=\"weather_data.html\">Weather Data<\/a>",
hmTitlePath:"Weather Data > Typical and Single Year",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Typical and Single Year<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">SAM can simulate systems using either typical year data representing the resource and weather at a given location over a multi-year period, or single-year data.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Because SAM\'s financial models use multi-year cash flow calculations, SAM is designed to work with typical year weather data that describe weather conditions over a long time period. This makes it possible to use a single year of data to represent a system\'s annual electricity output over many years. When you run a simulation, the performance model uses hourly data from the weather file to calculate the quantity of electricity generated by the system in one year by summing the 8,760 hourly generation values. The financial model assumes that this value is the amount of electricity the system generates in each year of the analysis period you specify in the financial parameters. If you specify a non-zero <\/span><span class=\"f_CHInterfaceElement\">degradation rate <\/span><span class=\"f_Text\">on the <a href=\"degradation.html\" class=\"topiclink\">Degradation<\/a> page, then the financial model assumes that the system\'s electricity output decreases from year to year throughout the analysis period.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For some analyses, it may be appropriate to use single year data instead of typical year data. For example:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">To model a system\'s performance (ignoring the <a href=\"fin_overview.html\" class=\"topiclink\">financial model<\/a> inputs and results).<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">To explore <a href=\"electricity_rates_load.html\" class=\"topiclink\">savings and revenue<\/a> when electricity prices are weather dependent, for example, in a location with hot summers and electricity prices that increase with demand to meet summer cooling loads.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_ListLast\">For statistical studies involving single year data for many years, such as for <a href=\"p50p90.html\" class=\"topiclink\">P50\/P90 analysis<\/a>.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><a id=\"typicalyear\" class=\"hmanchor\"><\/a><span class=\"f_Heading3_atocs_\">Typical Year Data<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">A typical year file uses a single year of hourly data to represent the renewable resource and weather conditions over a multi-year period. The typical year methodology involves analyzing a multi-year data set and choosing a set of 12 months from the multi-year period that best represent typical conditions over the long term period. For example, a typical year file developed from a set of data for the years 1998-2005, might use data from 2000 for January, 2003 for February, 1999 for March, etc. Annual simulation results from typical year weather data are suitable for long-term economic analysis.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">In the <a href=\"https:\/\/nsrdb.nrel.gov\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/nsrdb.nrel.gov\">NREL National Solar Radiation Database (NSRDB)<\/a>, TMY is <a href=\"https:\/\/nsrdb.nrel.gov\/about\/tmy.html\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/nsrdb.nrel.gov\/about\/tmy.html\">typical meteorological year data<\/a> developed using NREL\'s TMY weighting methodology described in the PSM documentation, available on the NSRDB website. The typical months in these files are based on both the global horizontal and direct radiation in the long term data, and to a lesser degree on the temperature and wind speed data. These files may be most suitable for modeling solar power systems and for modeling non-solar technologies that use the weather data in the file (biopower, geothermal) to estimate thermal losses from the steam power cycle. They are not ideally suited for modeling winnsrd power systems.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The following are examples of weather data files that contain typical year data:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">TMY files from the NSRDB\'s PSM data. TMY files covering different ranges of years are available. For example TMY-2016 covers 1998-2016, and TMY-2017 covers 1998-2017.<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">The representative wind data files (SRW) included in SAM\'s default wind resource library.<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">TMY files from the <a href=\"https:\/\/sam.nrel.gov\/weather-data\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/sam.nrel.gov\/weather-data\">European Commission PVGIS website<\/a>.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_ListLast\">EPW files from the <a href=\"https:\/\/sam.nrel.gov\/weather-data\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/sam.nrel.gov\/weather-data\">EnergyPlus website<\/a>.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The NSRDB PSM dataset also includes typical global horizontal irradiance (TGY) and typical direct normal irradiance (TDY) files for 2016 up to the current year. To learn more about these typical year file types, see Habte, A.; Lopez, A.; Sengupta, M.; Wilcox, S. (2014). Temporal and Spatial Comparison of Gridded TMY, TDY, and TGY Data Sets. 30 pp. NREL\/TP-5D00-60886. (<a href=\"https:\/\/www.nrel.gov\/docs\/fy14osti\/60886.pdf\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/www.nrel.gov\/docs\/fy14osti\/60886.pdf\">PDF 17 MB<\/a>).<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><a id=\"singleyear\" class=\"hmanchor\"><\/a><span class=\"f_Heading3_atocs_\">Single Year Data<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Single year data represents the weather at a location for a specific year. Single year data is appropriate for analysis of a system\'s performance in a particular year, and may be appropriate for analyses involving time-dependent <a href=\"electricity_rates.html\" class=\"topiclink\">electricity pricing<\/a> or <a href=\"electric_load.html\" class=\"topiclink\">electric loads<\/a> for a given year.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The following are examples of weather files that contain single-year data:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Single-year files from the NSRDB\'s PSM data.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_ListLast\">Wind data files (SRW) from the NREL Wind Integration Dataset.<\/span><\/p>"
})
