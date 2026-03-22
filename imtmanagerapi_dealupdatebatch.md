# DealUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Trade Databases ](imtmanagerapi_trading.md "Trade Database Functions") / [ Deals ](imtmanagerapi_trading_deal.md "Deals")/ DealUpdateBatch | [](imtmanagerapi_dealupdate.md "DealUpdate") [](imtmanagerapi_dealupdatebatcharray.md "DealUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::DealUpdateBatch
Update deals in a server database in bulk.
C++
MTAPIRES IMTManagerAPI::DealUpdateBatch( IMTDealArray*  deals, // Array of deals MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.DealUpdateBatch( CIMTDealArray deals, // Array of deals MTRetCode[] res // Array of results )  
---  
Python
ManagerAPI.DealUpdateBatch( deals # Array of deals )  
---  
Parameters
deals
[in] A pointer to the array of deals [IMTDealArray](imtdealarray.md "IMTDealArray").
results
[out] An array with deal update results. The size of the 'results' array must not be less than that of 'deals'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all deals have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been updated. Analyze the 'results' array for more details concerning the execution results. The update result of each deal from the 'deals' array is added to 'results'. The result index corresponds to the deal index in the source array.
Note
A deal can only be updated from the applications connected to the trade server, on which the deals have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Make sure to fill in all the required fields of the deals, not only the ones which you want to change. It is recommended that you first receive deals from the server, change the required fields in them and then send them back to the server.
The server checks the correctness of the updated deals. The following fields must be filled:
  * [IMTDeal::Login](imtdeal_login.md "Login") (an account with this login must exist on the server)
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action")
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")

  * [IMTDeal::Digits](imtdeal_digits.md "Digits")
  * [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency")
  * [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize")

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.