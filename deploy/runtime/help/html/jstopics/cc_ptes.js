hmLoadTopic({
hmKeywords:"",
hmTitle:"PTES Installation Costs",
hmDescription:"Installation Costs are costs associated with installing the system, and include equipment, labor, engineering, permitting, and any other costs that apply in Year 0 of the...",
hmPrevLink:"cc_etes.html",
hmNextLink:"cc_marine_energy.html",
hmParentLink:"installation_costs.html",
hmBreadCrumbs:"<a href=\"installation_costs.html\">Installation Costs<\/a>",
hmTitlePath:"Installation Costs > PTES Installation Costs",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">PTES Installation Costs<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Installation Costs are costs associated with installing the system, and include equipment, labor, engineering, permitting, and any other costs that apply in Year 0 of the project cash flow. Some costs, such as debt-related and sales tax costs are specified on the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">SAM uses the variables on the Installation Costs page to calculate the project investment cost.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Recurring costs that apply in Years 1 and later of the project cash flow are on the <a href=\"operating_costs.html\" class=\"topiclink\">Operating Costs<\/a> page.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Variable values in boxes with white backgrounds are values that you can edit. Boxes with blue backgrounds contain calculated values or values from other pages that SAM displays for your information.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">SAM provides the categories under <\/span><span class=\"f_CHInterfaceElement\">Direct Capital Costs<\/span><span class=\"f_Text\"> and <\/span><span class=\"f_CHInterfaceElement\">Indirect Capital Costs<\/span><span class=\"f_Text\"> for your convenience to help keep track of project installation costs. Only the <\/span><span class=\"f_CHInterfaceElement\">Total Installed Cost<\/span><span class=\"f_Text\"> value affects the cash flow calculations, so you can assign capital costs to the different cost categories in whatever way makes sense for your analysis. For example, you could assign the cost of designing the array to the module cost category or to the engineering category with equivalent results. After you assign costs to the categories, you should verify that the total installed cost value is what you expect.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">CSP Installation Costs Notes.<\/span><span class=\"f_Note\"> <\/span><br \/>\n\r<span class=\"f_Note\">&nbsp;<\/span><br \/>\n\r<span class=\"f_Note\">The default cost values that appear when you create a file or case are intended to illustrate SAM\'s use. The cost data are meant to be realistic, but not to represent actual costs for a specific project. For more information and a list of online resources for cost data, see the <a href=\"https:\/\/sam.nrel.gov\/concentrating-solar-power\/csp-cost-data\" target=\"_blank\" class=\"weblink\" title=\"https:\/\/sam.nrel.gov\/concentrating-solar-power\/csp-cost-data\">SAM website<\/a>.<\/span><br \/>\n\r<span class=\"f_Note\">&nbsp;<\/span><br \/>\n\r<span class=\"f_Note\">The direct capital costs in \$\/kWe are in kilowatts of gross power block capacity rather than nameplate capacity because the size and cost of the power block is determined by the gross capacity, not the net capacity. The total installed cost in \$\/kWe (actually overnight installed cost because it does not include financing during construction costs, which are accounted for on the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page) is in kilowatts of nameplate capacity, because that is what is delivered to the grid and is consistent with how costs are reported for utility generation technologies. The indirect costs in \$\/Wac are in Watts of nameplate power block capacity because those costs that use the entire plant as the basis, not just the power block.<\/span><br \/>\n\r<span class=\"f_Note\">&nbsp;<\/span><br \/>\n\r<span class=\"f_Note\">The Installation Costs page is only available for cases with a cash-flow-based financial mode. It is not available with the No Financial Model option or the LCOE Calculator financial model.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Direct Capital Costs<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">A direct capital cost represents an expense for a specific piece of equipment or installation service that applies in year zero of the cash flow.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note:<\/span><span class=\"f_Note\"> Because SAM uses only the total installed cost value in cash flow calculations, how you distribute costs among the different direct capital cost categories does not affect the final results.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Heater cost (\$\/kWt)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A cost per kW of heater thermal power for expenses related to the electric heater equipment, including equipment and labor.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Thermal energy storage cost (\$\/kWht)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Cost per thermal megawatt-hour of storage capacity to account for expenses related to installation of the thermal storage system, including equipment and labor.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Balance of plant cost (\$\/kWe)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Cost per electric kilowatt of power cycle gross capacity to account for additional costs.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Power cycle cost (\$\/kWe)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Cost per electric kilowatt of power cycle gross capacity to account for the installation of the power cycle, including equipment and labor.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Contingency (%)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A percentage of the sum of the heater, thermal energy storage, and power cycle costs to account for expected uncertainties in direct cost estimates.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Total Direct Cost (\$)<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The sum of heater, thermal energy storage, and power cycle, and contingency costs.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Indirect Capital Costs<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">An indirect cost is typically one that cannot be identified with a specific piece of equipment or installation service.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note:<\/span><span class=\"f_Note\"> Because SAM uses only the total installed cost value in cash flow calculations, how you distribute costs among the different indirect capital cost categories does not affect the final results.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">EPC and Owner Cost<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">EPC (engineer-procure-construct) and owner costs are associated with the design and construction of the project. SAM calculates the total cost as the sum of the Non-fixed Cost and Fixed Cost.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Typical costs that may be appropriate to include in the EPC and Owner category are: Permitting, royalty payments, consulting, management or legal fees, geotechnical and environmental surveys, interconnection costs, spare parts inventories, commissioning costs, and the owner\'s engineering and project development activities.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Total Land Costs<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Costs associated with land purchases, which SAM calculates as the sum of a non-fixed cost and a fixed cost. Use the Land category described below for land costs, and inputs on the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page for financing costs.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">SAM calculates the total EPC and Owner Costs and Total Land Costs by adding the four costs that you can specify using different units.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">\$\/acre<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A cost in dollars per total land area in acres.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">% of direct cost<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A cost as a percentage of <\/span><span class=\"f_CHInterfaceElement\">Total Direct Cost<\/span><span class=\"f_VariableDescription\"> under <\/span><span class=\"f_CHInterfaceElement\">Direct Capital Cost<\/span><span class=\"f_VariableDescription\">.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">\$\/We<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A cost in dollars per AC Watt of nameplate capacity.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">\$<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">A fixed dollar amount<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Total Indirect Cost (\$)<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The sum of engineer-procure-construct costs, project-land-miscellaneous costs, and sales tax.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Sales Tax<\/span><\/h3>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Sales tax basis, %<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The percentage of total direct cost used to the calculate sales tax amount.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">SAM calculates the total sales tax amount by multiplying the sales tax rate from the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page by the sales tax basis on the Installation Costs page: <\/span><\/p>\n\r<p class=\"p_EquationExcel\"><span class=\"f_EquationExcel\">Total Sales Tax (\$) = Sales Tax Rate (%) × Sales Tax Basis (%) × Total Direct Cost (\$)<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For an explanation of the effect of sales tax on income tax, see <\/span><span class=\"f_CHInterfaceElement\">Sales Tax<\/span><span class=\"f_Text\"> on the <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> topic for the financial model you are using (Residential, Commercial, Single Owner, etc.)<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Total Installed Cost<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The total installed cost is the sum of all of the direct and indirect capital costs and sales tax. SAM uses this value to calculate the project\'s <a href=\"mtf_costs.html\" class=\"topiclink\">net capital cost<\/a>, which is the total installed cost less any cash incentives on the <a href=\"incentives.html\" class=\"topiclink\">Incentives<\/a> page and plus any additional financing costs from <a href=\"financial_parameters.html\" class=\"topiclink\">Financial Parameters<\/a> page.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Total installed cost, \$<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The sum of total direct cost and total indirect cost.<\/span><\/p>\n\r<p class=\"p_VariableName\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_VariableName\">Total installed cost per capacity<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">Total installed cost divided by the total system rated or nameplate capacity. This value is provided for reference only. SAM does not use it in cash flow calculations.<\/span><\/p>\n\r<p class=\"p_VariableDescription\"><span class=\"f_VariableDescription\">The units depend on the type of system: For photovoltaic systems: \$\/Wdc, for standalone battery systems: \$\/Wac, for other systems: \$\/kWac.<\/span><\/p>\n\r"
})
