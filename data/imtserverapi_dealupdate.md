# DealUpdate (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Deals ](serverapi_trading_deal.md "Deals")/ DealUpdate | [](imtserverapi_dealaddbatcharray.md "DealAddBatchArray") [](imtserverapi_dealupdatebatch.md "DealUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::DealUpdate
Update a deal in the server data base.
MTAPIRES IMTServerAPI::DealUpdate( IMTDeal* deal // Deal object )  
---  
Parameters
deal
[in] An object of a deal.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A deal can be updated only from the plugins that run on the same trade server where the deal was created. For all other plugins the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") will be returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") will be returned.
All required fields in the 'deal' object must be filled, not only the ones that need to be changed. It is recommended that you first receive a deal object from the server, change the required fields in it, and then send the changed object back to the server.
The server verifies the modified deal. The following fields must be filled in that deal:
  * [IMTDeal::Login](imtdeal_login.md "Login") (an account with this login must exist on the server)
  * [IMTDeal::Symbol](imtdeal_symbol.md "Symbol")
  * [IMTDeal::Action](imtdeal_action.md "Action")
  * [IMTDeal::Volume](imtdeal_volume.md "Volume")
  * [IMTDeal::Price](imtdeal_price.md "Price")
  * [IMTDeal::TimeMsc](imtdeal_timemsc.md "TimeMsc")

  * [IMTDeal::Digits](imtdeal_digits.md "Digits")
  * [IMTDeal::DigitsCurrency](imtdeal_digitscurrency.md "DigitsCurrency")
  * [IMTDeal::ContractSize](imtdeal_contractsize.md "ContractSize")
