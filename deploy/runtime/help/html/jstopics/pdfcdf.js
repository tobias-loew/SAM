hmLoadTopic({
hmKeywords:"",
hmTitle:"PDF \/ CDF",
hmDescription:"The PDF\/CDF tab shows the probability density function and cumulative distribution function for a single variable.",
hmPrevLink:"heatmap.html",
hmNextLink:"uncertainties.html",
hmParentLink:"results.html",
hmBreadCrumbs:"<a href=\"results.html\">Results<\/a>",
hmTitlePath:"Results > PDF \/ CDF",
hmHeader:"<h1 class=\"p_Heading1\" style=\"page-break-inside: avoid; page-break-after: avoid;\"><span class=\"f_Heading1\">PDF \/ CDF<\/span><\/h1>\n\r",
hmBody:"<p class=\"p_Text\"><span class=\"f_Text\">The PDF\/CDF tab shows the probability density function and cumulative distribution function for a single variable.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The probability density function (PDF) is a histogram that shows the distribution of the variable you choose. You can choose from the following options to determine the number of bins in the histogram. The cumulative distribution function (CDF) shows the percentage of data points at or below a certain value. SAM displays the empirical CDF, which is a step function that increases at each data point, and is flat in between. For a large number of data points, this is a very good approximation to the true CDF.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">Choose <\/span><span class=\"f_CHInterfaceElement\">Exclude Zero Values<\/span><span class=\"f_Text\"> to only show non-zero values in the graph. This is useful for data like a system\'s hourly generation profile that has many night-time hours of no generation. <\/span><\/p>\n\r<p class=\"p_Note\"><span class=\"f_CHNote\">Note.<\/span><span class=\"f_Note\"> For the Detailed PV system and other models with night-time consumption, night-time consumption results in a bar that appears to be for zero values but is actually for the relatively small negative night-time consumption values.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">A blue line on the graph indicates the position for the <\/span><span class=\"f_CHInterfaceElement\">p-value<\/span><span class=\"f_Text\"> percentage that you type, and a number under the graph indicates the P-value for the variable being displayed. For example, a P-value of 20% for system power generated is the kW value on the x-axis for a CDF of 80%: Indicating that the system generated that amount of power 20% or more of the time.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">For the PDF number of bins:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_CHInterfaceElement\">Sturge’s formula<\/span><span class=\"f_List\"> calculates the number of bins as log2(n) + 1, where n is the number of data points. S<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_CHInterfaceElement\">SQRT (Excel)<\/span><span class=\"f_List\"> uses the same method as Microsoft Exce where the number of bins is the square root of the number of data points.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_CHInterfaceElement\">20<\/span><span class=\"f_ListLast\">, <\/span><span class=\"f_CHInterfaceElement\">50<\/span><span class=\"f_ListLast\">, and <\/span><span class=\"f_CHInterfaceElement\">100<\/span><span class=\"f_ListLast\"> set the number of bins to the value you choose.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">The scaling options allow you to change the units on the Y axis:<\/span><\/p>\n\r<p class=\"p_List\" style=\"text-indent: 0; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_CHInterfaceElement\">Histogram<\/span><span class=\"f_List\"> shows the number of data points in each bin.<\/span><\/p>\n\r<p class=\"p_ListLast\" style=\"text-indent: 0; page-break-inside: avoid; padding-left: 1.5000rem; margin-left: 1.5000rem;\"><span class=\"f_List\" style=\"font-family: Arial,\'Lucida Sans Unicode\',\'Lucida Grande\',\'Lucida Sans\';display:inline-block;width:1.5000rem;margin-left:-1.5000rem\">&#8226;<\/span><span class=\"f_CHInterfaceElement\">Scaled histogram<\/span><span class=\"f_ListLast\"> shows each bar height as a percentage of the total number of data points.<\/span><\/p>\n\r<p class=\"p_Text\"><span class=\"f_Text\">To export an image of the graph or the graph data, right-click the graph (control-click on a mouse with one button).<\/span><\/p>\n\r"
})
