# TradeRequestCreateArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Trade Requests ](serverapi_trading_request.md "Trade Requests")/ TradeRequestCreateArray | [](imtserverapi_traderequestcreate.md "TradeRequestCreate") [](imtserverapi_tradeconfirmcreate.md "TradeConfirmCreate") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::TradeRequestCreateArray
Create an object of the array of trade requests.
IMTRequestArray* IMTServerAPI::TradeRequestCreateArray()  
---  
Return value
It returns a pointer to the created object that implements the [IMTRequestArray](imtrequestarray.md "IMTRequestArray") interface. In case of failure, it returns NULL.
Note
The created object must be destroyed by calling the [IMTRequestArray::Release](imtrequestarray_release.md "Release") method of this object.