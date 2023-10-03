hmLoadTopic({
hmKeywords:"",
hmTitle:"Financial Models",
hmDescription:"SAM\'s financial models calculate a project\'s cash flow over an analysis period that you specify. The cash flow captures the value of electricity generated by the system and...",
hmPrevLink:"technology_options.html",
hmNextLink:"user_support.html",
hmParentLink:"index.html",
hmBreadCrumbs:"<a href=\"index.html\">Introduction<\/a>",
hmTitlePath:"Introduction > Financial Models",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">Financial Models<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">SAM\'s financial models calculate a project\'s cash flow over an analysis period that you specify. The cash flow captures the value of electricity generated by the system and incentives, and the cost of installation, operation and maintenance, taxes, and debt.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note.<\/span><span class=\"f_Note\"> SAM is designed to calculate the value of electricity generated by a system. The economic metrics it reports are based on units of electrical energy rather than thermal energy. The <a href=\"solar_hot_water.html\" class=\"topiclink\">solar water heating<\/a> model calculates the value of electricity saved by the system, assuming that heat from the system displaces heat that would be generated by a conventional electric water heater without the solar system.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The financial models can represent two main types of projects: <\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Residential and commercial projects that buy and sell electricity at retail rates and displace purchases of power from the grid.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_ListLast\">PPA projects that sell electricity at a wholesale rate to meet internal rate of return requirements.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><a id=\"rescom\" class=\"hmanchor\"><\/a><span class=\"f_Heading3_atocs_\">Residential and Commercial Owner<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">In SAM, <a href=\"fin_residential.html\" class=\"topiclink\">residential<\/a> and <a href=\"fin_commercial.html\" class=\"topiclink\">commercial<\/a> projects buy and sell power at retail rates. They may be financed through either a loan or cash payment (0% debt percent). These projects recover investment costs by selling electricity at rates established by the electricity service provider. SAM calculates metrics for these projects at the project level, assuming that a single entity develops, owns, and operates the project.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For residential and commercial projects, SAM calculates the project\'s <a href=\"mtf_lcoe.html\" class=\"topiclink\">levelized cost of energy (LCOE)<\/a>, which represents the cost of installing and operating the system, including debt and tax costs, and accounting for incentives. The model also calculates the <a href=\"mtf_npv.html\" class=\"topiclink\">net present value (NPV)<\/a> of the after tax cash flow, and a <a href=\"mtf_payback.html\" class=\"topiclink\">payback period<\/a> representing the number of years required for the cumulative after tax cash flow to cover the initial equity investment in the project.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Commercial projects may qualify for tax deductions under the Modified Accelerated Depreciation Schedule (MACRS) described in the United States tax code. SAM provides options for specifying custom depreciation schedules in addition to the MACRS mid-quarter and half-year schedules on the <a href=\"depreciation.html\" class=\"topiclink\">Depreciation<\/a> page.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Residential and commercial projects are typically smaller than 500 kW, although SAM does not restrict system sizes, so it is possible to model any size system using either the residential or commercial financial model.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">SAM\'s <a href=\"electricity_rates.html\" class=\"topiclink\">Electricity Rates<\/a> page provides a range of options for specifying the retail electricity rate structure for a project. The rate structure may include any of the following:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Flat buy and sell rates (with or without net metering)<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Time-of-use energy charges<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Monthly demand charges (either fixed or time-of-use)<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Tiered rates<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_List\">Fixed monthly charges<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For projects with demand charges and tiered rates, SAM requires electric load data, which is specified on the <a href=\"electric_load.html\" class=\"topiclink\">Electric Load<\/a> page.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><a id=\"thirdparty\" class=\"hmanchor\"><\/a><span class=\"f_Heading3_atocs_\">Third Party Ownership<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">In a third party ownership project, a photovoltaic system is installed on a residential or commercial property. The property owner, or customer, makes an agreement with a third party who installs, operates, and owns the system. The system reduces the customer\'s electricity bill, and the customer makes payments to the third party owner for the system, either through a lease agreement or a power purchase agreement.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The <a href=\"fin_tpo_host.html\" class=\"topiclink\">Host<\/a> model is from the host perspective, and allows you to compare a lease agreement with a power purchase agreement.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The <a href=\"fin_tpo_host_developer.html\" class=\"topiclink\">Host \/ Developer<\/a> model is from the developer perspective to determine a power price that covers the developer\'s costs.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Community Solar<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">A community solar project earns revenue from payments made to the system owner by subscribers to the project. The project owner builds, owns, and operates the power system, and has sufficient tax liability to fully utilize all tax benefits.<\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Power Purchase Agreement (PPA)<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">PPA projects sell all of the electricity generated by the power system at a price negotiated through a power purchase agreement (PPA) to meet a set of equity returns requirements. A PPA project may involve one or two parties.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">SAM provides options for calculating a power purchase price given a target internal rate of return, or for calculating the rate of return given a power purchase price.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The power price can be made to vary annually over the analysis period using either a fixed annual escalation rate, or by assigning a separate price to each year. The price can be made to vary diurnally using time-of-delivery (TOD) factors defined either using hour-by-month schedules or hourly (or subhourly) time series factors.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Single Owner<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">In the <a href=\"fin_single_owner.html\" class=\"topiclink\">Single Owner<\/a> model, the project owner builds, owns, and operates the power system and has sufficient tax liability to fully utilize all tax benefits. The owner may be either the original developer or a third-party tax investor that purchases the project from the developer.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Partnership Flip with and without Debt<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The partnership flip with debt (<a href=\"fin_leveraged_partnership.html\" class=\"topiclink\">Leveraged Partnership Flip<\/a>) and partnership flip without debt (<a href=\"fin_all_equity_partnership.html\" class=\"topiclink\">All Equity Partnership Flip<\/a>) models are for two-party projects that involve equity investments by a project developer and a third party tax investor. <\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The investor has sufficient tax liability from its other business operations to fully utilize tax credits and depreciation deductions in the years in which the project generates the benefits. The project sets up a limited liability entity, and once the project begins generating and selling electricity, all of the project’s net cash flows and tax benefits are passed through this entity to its owners. <\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The project allocates a majority of the cash and tax benefits to the investor when the project begins operation and until the &quot;flip year&quot; when tax investor receives a pre-negotiated after-tax internal rate of return or &quot;target IRR.&quot; Once the target IRR is reached, a majority of the cash and any remaining tax benefits are allocated to the developer.<\/span><\/p>\n\r<h4 class=\"p_Heading4\"><span class=\"f_Heading4\">Sale Leaseback<\/span><\/h4>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The <a href=\"fin_sale_leaseback.html\" class=\"topiclink\">Sale Leaseback<\/a> model is another two-party structure that involves a tax investor purchasing 100% of the project from the developer and then leasing it back to the developer. This structure differs from the partnership flip structures in that the tax investor and the developer do not share the project cash and tax benefits (or liability). Instead, each party has its own separate cash flow and taxable income. <\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The purchase price paid by the tax investor is equal to the total project cost, less a lease payment and the value of working capital reserve accounts. The developer typically funds the reserve accounts to ensure it has some financial exposure. The tax investor receives lease payments from the developer and any ownership-related incentives such as the tax credits, incentive payments, and the depreciation tax deductions. The developer operates the project and keeps any excess cash flow from operations, after payment of all operating expenses and the lease payments. This provides the developer with an incentive to operate the project as efficiently as possible.<\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note.<\/span><span class=\"f_Note\"> SAM assumes that the tax investor receives the ITC in the sale leaseback structure. SAM does not model alternative lease structures that treat the ITC differently.<\/span><\/p>\n\r<p class=\"p_Term\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Term\">&nbsp;<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Below is a table summarizing the five structures.<\/span><\/p>\n\r<div style=\"text-align: left; text-indent: 0; padding: 0 0 0 0; margin: 0 0 0.3750rem 0;\"><table class=\"DefaultShadedRows\" >\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\" style=\"vertical-align:middle;\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">&nbsp;<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"vertical-align:bottom;\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">All Equity Partnership Flip<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"vertical-align:bottom;\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">Leveraged Partnership Flip<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"vertical-align:bottom;\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">Sale Leaseback<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"vertical-align:bottom;\"><p class=\"p_TableHeadColumn\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadColumn\">Single Owner<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableHeadRow\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadRow\">Equity Owners <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Developer <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Developer<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor (Lessor) <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Developer<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">(third party if sold)<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableHeadRow\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadRow\">Project Debt <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">No<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Yes<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">No<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Optional (owner choice) <\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableHeadRow\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadRow\">Return Target<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor after-tax IRR<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">(Flip Target)<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor after-tax IRR<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">(Flip Target)<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Lessor after-tax IRR <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Owner after-tax IRR<\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableHeadRow\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadRow\">Cash Sharing <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Pre-Flip: Bifurcated<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Post-Flip: Primarily developer <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Pre-Flip: Pro rata<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Post-Flip: Primarily developer <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Lessor: Lease payment<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Lessee: Project margin <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Owner receives 100% of project cash <\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<tr class=\"DefaultShadedRows\">\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableHeadRow\" style=\"page-break-inside: avoid;\"><span class=\"f_TableHeadRow\">Tax Benefit Sharing <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Pre-Flip: Primarily tax investor <\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Post-Flip: Primarily developer <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Pre-Flip: Primarily tax investor <\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Post-Flip: Primarily developer <\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Tax investor and developer have different taxable incomes<\/span><\/p>\n\r<p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">ITC and Depreciation goes to tax investor<\/span><\/p>\n\r<\/td>\n\r<td class=\"DefaultShadedRows\" style=\"background-color:#C0C0C0;\"><p class=\"p_TableTextLeft\" style=\"page-break-inside: avoid;\"><span class=\"f_TableTextLeft\">Owner receives 100% of project tax benefits <\/span><\/p>\n\r<\/td>\n\r<\/tr>\n\r<\/table>\n\r<\/div>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">Merchant Plant<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The <a href=\"fin_merchant_plant.html\" class=\"topiclink\">Merchant Plant<\/a> model is similar to the Single Owner model described above, except that power generated by the system is sold at market prices that can vary on an hourly (or subhourly), daily, or monthly basis over the project life. Revenue can be from energy production, ancillary services and capacity payments, or a combination of the three. <\/span><\/p>\n\r<h3 class=\"p_Heading3_atocs_\" style=\"page-break-inside: avoid; page-break-after: avoid; border-top: none; border-right: none; border-left: none;\"><span class=\"f_Heading3_atocs_\">LCOE Calculator<\/span><\/h3>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The <a href=\"fin_lcoefcr.html\" class=\"topiclink\">LCOE calculator<\/a> uses a simple method to calculate the project\'s levelized cost of energy (LCOE). You provide the installation cost, operating costs, and a fixed charge rate as input, and the model calculates the LCOE based on the annual energy generated by the system. The calculator can also calculate the fixed charge rate when you provide basic financial parameters.<\/span><\/p>\n\r"
})
