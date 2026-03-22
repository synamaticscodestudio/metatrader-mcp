# PositionUpdateBatchArray (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Administrator Interface ](imtadminapi.md "Administrator Interface") / [ Trade Databases ](imtadminapi_trading.md "Trade Database Functions") / [ Positions ](imtadminapi_trading_position.md "Functions")/ PositionUpdateBatchArray | [](imtadminapi_positionupdatebatch.md "PositionUpdateBatch") [](imtadminapi_positiondelete.md "PositionDelete") |
| --- | --- | --- |
| --- | --- |

IMTAdminAPI::PositionUpdateBatchArray
Update positions in a server database in bulk.
C++
MTAPIRES IMTAdminAPI::PositionUpdateBatchArray( IMTPosition**  positions, // An array of positions const UINT positions_total, // Number of positions in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTAdminAPI.PositionUpdateBatchArray( CIMTPosition[] positions, // Array of positions MTRetCode[] retcodes // Array of results )  
---  
Parameters
positions
[in] A pointer to the array of positions.
positions_total
[in] The number of positions in the 'positions' array.
results
[out] An array with position update results. The size of the 'results' array must not be less than that of 'positions'.
Return Value
The [MT_RET_OK](retcodes_successful.md "Successful completion") response code indicates that all positions have been updated. The [MT_RET_ERR_PARTIAL](retcodes_common.md "Common errors") response code means that only some of the positions have been updated. Analyze the 'results' array for more details concerning the execution results. The result of update of each position from the 'positions' array is added to 'results'. The index of a result corresponds to the index of a position in the source array.
Note
Positions can only be updated from the applications connected to the trade server, on which the positions have been created. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned. If the object is not found, the response code [MT_RET_ERR_NOTFOUND](retcodes_common.md "Common errors") is returned.
Make sure to fill in all the required fields of the positions, not only the ones which you want to change. It is recommended that you first receive positions from the server, edit the required fields in them, and then send them back to the server. However, please note that while you are working with the position in the API, the position price may change on the server, and the previously received [IMTPosition::PriceCurrent](imtposition_pricecurrent.md "PriceCurrent") value may no longer be valid. If you send the value back as is, a price jump can be observed on the client side: an outdated value will be set for positions, and the price will be updated to the relevant one at the next tick. To avoid such price jumps, retrieve the current symbol price just before sending position changes to the server, and place it in IMTPosition::PriceCurrent.
The server checks the correctness of the updated positions. The following fields must be filled:
  * [IMTPosition::Login](imtposition_login.md "Login") (an account with this login must exist on the server)
  * [IMTPosition::Symbol](imtposition_symbol.md "Symbol")
  * [IMTPosition::Action](imtposition_action.md "Action")
  * [IMTPosition::Volume](imtposition_volume.md "Volume") or [IMTPosition::VolumeExt](imtposition_volumeext.md "VolumeExt")
  * [IMTPosition::PriceOpen](imtposition_priceopen.md "PriceOpen")
  * [IMTPosition::Digits](imtposition_digits.md "Digits")
  * [IMTPosition::DigitsCurrency](imtposition_digitscurrency.md "DigitsCurrency")
  * [IMTPosition::ContractSize](imtposition_contractsize.md "ContractSize")
  * [IMTPosition::TimeCreate](imtposition_timecreate.md "TimeCreate")

  * [IMTPosition::RateMargin](imtposition_ratemargin.md "RateMargin")

To improve performance, it is recommended to create arrays and perform group operations separately for each trading account.