# DealUpdateBatchArray (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealUpdateBatchArray | [](imtserverapi_dealupdatebatch.md "DealUpdateBatch") [](imtserverapi_dealdelete.md "DealDelete") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealUpdateBatchArray
Updates deals in a server database in bulk.
MTAPIRES IMTServerAPI::DealUpdateBatchArray( IMTDeal**  deals, // An array of deals const UINT deals_total, // The number of deals in the array MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to the array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with deal update results. The size of the 'results' array must be not less than that of 'deals'.
Return value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all deals have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of deals have been updated. Analyze the 'results' array for a detailed information on execution results. The result of update of each deal from the 'deals' array is added to 'results'. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can only be updated from the plugins, which run on the same trade server where the deals have been created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
All required fields of deals must be filled in, not only the ones that need to be changed. It is recommended that you first receive deals from the server, change required fields, and then send them back to the server.
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