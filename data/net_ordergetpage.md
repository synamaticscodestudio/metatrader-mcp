# OrderGetPage (MetaTrader5SDK)

|  | [ Web API ](webapi.md "Web API") / [ Manager Interface (Rest API) ](webapi_main.md "Manager Interface \(Rest API\)") / [ .NET Implementation of Protocol ](net.md "Protocol Implementation in .NET") / [ MT5WebAPI Class ](net_mtwebapi.md "MT5WebAPI Class") / [ Orders ](net_order.md "Orders")/ OrderGetPage | [](net_ordergettotal.md "OrderGetTotal") [](net_historyget.md "HistoryGet") |
| --- | --- | --- |
| --- | --- |

MT5WebAPI.OrderGetPage
Get open orders of a client by the login.
MTRetCode MT5WebAPI.OrderGetPage( ulong login, // Login uint offset, // Order index uint total, // The number of orders out List<MTOrder> orders // The array of orders )  
---  
Parameters
login
[in] The login of the client whose orders you need to get.
offset
[in] The index of the order starting from which you need to get orders. Numbering starts from 0.
total
[in] The number of orders that should be obtained. The maximum number of orders that can be requested in one method call is 100.
orders
[out] The MTOrder array of structures in which trade orders are described. Description of the structure parameters is provided in the ["Data Structure"](webapi_order_data_structure.md "Data Structure") section.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
This method allows to easily arrange a paged output of resulting orders. First you should get the total number of a client's orders using the [MT5WebAPI::OrderGetTotal](net_ordergettotal.md "OrderGetTotal") method. After defining the number of orders that should be shown on one page (set by the total parameter), you can easily find the offset parameter for each page.