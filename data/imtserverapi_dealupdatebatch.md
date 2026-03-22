# DealUpdateBatch (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealUpdateBatch | [](imtserverapi_dealupdate.md "DealUpdate") [](imtserverapi_dealupdatebatcharray.md "DealUpdateBatchArray") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealUpdateBatch
Modification of deals in the server database in bulk.
MTAPIRES IMTServerAPI::DealUpdateBatch( IMTDealArray*  deals, // An array of deals MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to the object of the [IMTDealArray](imtdealarray.md "IMTDealArray") array of deals.
results
[out] An array with deals modification results. The size of the 'results' array must be not less than that of 'deals'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all specified deals have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been updated. For details, you should analyze the 'results' array. The result of modification of each deal from the 'deal' array is added to the 'results' array. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can be updated only from the plugins, which run on the same trade server where the deals were created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
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
IMTServerAPI::DealUpdateBatch
Modification of deals in the server database in bulk.
MTAPIRES IMTServerAPI::DealUpdateBatch( IMTDeal**  deals, // An array of deals const UINT deals_total, // The number of deals in the array MTAPIRES* results // An array of results )  
---  
Parameters
deals
[in] A pointer to an array of deals.
deals_total
[in] The number of deals in the 'deals' array.
results
[out] An array with deals modification results. The size of the 'results' array must be not less than that of 'deals'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code means that all specified deals have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the deals have been updated. For details, you should analyze the 'results' array. The result of modification of each deal from the 'deal' array is added to the 'results' array. The index of a result corresponds to the index of a deal in the source array.
Note
Deals can be updated only from the plugins, which run on the same trade server where the deals were created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
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