# IMTRequest (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests")/ IMTRequest | [](trading_request.md "Trade Requests") [](imtrequest_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTRequest
The IMTRequest class contains the following methods:
| Method | Description |
| --- | --- |
| --- | --- |
| [Release](imtrequest_release.md "Release") | Delete the current object. |
| [Assign](imtrequest_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtrequest_clear.md "Clear") | Clear an object. |
| [Print](imtrequest_print.md "Print") | Get a string description of a trade request. |
| [ID number](imtrequest_id.md "ID") | Get the request ID. |
| [Login](imtrequest_login.md "Login") | Get and set a client login in a request. |
| [ExternalAccount](imtrequest_externalaccount.md "Account") | Get and set a client's account in an external trading system. |
| [Group](imtrequest_group.md "Group") | Get the group of the client who has sent the request. |
| [Symbol](imtrequest_symbol.md "Symbol") | Get and set a symbol in a request. |
| [SymbolOriginal](imtrequest_symboloriginal.md "SymbolOriginal") | Get and set the original symbol in a trade request received by the Gateway API. |
| [Digits](imtrequest_digits.md "Digits") | Get the number of decimal places in the trade request price. |
| [DigitsSet](imtrequest_digitsset.md "DigitsSet") | Set the number of decimal places in the trade request price. |
| [Action](imtrequest_action.md "Action") | Get and set the type of action to which the trade request belongs. |
| [TimeExpiration](imtrequest_timeexpiration.md "TimeExpiration") | Get and set the expiration time in a trade request. |
| [Type](imtrequest_type.md "Type") | Get and set the order type in a request. |
| [TypeFill](imtrequest_typefill.md "TypeFill") | Get and set the order filling type in a request. |
| [TypeTime](imtrequest_typetime.md "TypeTime") | Get and set the order expiration type in a request. |
| [Flags](imtrequest_flags.md "Flags") | Get and set additional flags of a trade request. |
| [Volume](imtrequest_volume.md "Volume") | Get and set the operation volume in a request. |
| [VolumeExt](imtrequest_volumeext.md "VolumeExt") | Get and set the operation volume in a request, with an extended accuracy. |
| [VolumeCurrent](imtrequest_volumecurrent.md "VolumeCurrent") | Get and set the current unfilled (remaining) order volume in the request. |
| [VolumeCurrentExt](imtrequest_volumecurrentext.md "VolumeCurrentExt") | Get and set the current unfilled (remaining) order volume in the request as an increased-precision value. |
| [Order](imtrequest_order.md "Order") | Get and set the ticket of an order in a trade request. |
| [OrderExternalID](imtrequest_orderexternalid.md "OrderExternalID") | Get the order ID in external trading systems. |
| [PartyID](imtrequest_partyid.md "PartyID") | Get and set the account number in the external system. |
| [PriceOrder](imtrequest_priceorder.md "PriceOrder") | Get and set the price of an order in a trade request. |
| [PriceTrigger](imtrequest_pricetrigger.md "PriceTrigger") | Get and set the price, at which a Limit order is placed when the Stop Limit order triggers. |
| [PriceSL](imtrequest_pricesl.md "PriceSL") | Get and set the Stop Loss level in a trade request. |
| [PriceTP](imtrequest_pricetp.md "PriceTP") | Get and set the Take Profit level in a trade request. |
| [PriceDeviation](imtrequest_pricedeviation.md "PriceDeviation") | Get and set the maximum allowed deviation of the execution price from the price requested in an order. |
| [PriceDeviationTop](imtrequest_pricedeviationtop.md "PriceDeviationTop") | Get the allowed price deviation in the increase direction. |
| [PriceDeviationBottom](imtrequest_pricedeviationbottom.md "PriceDeviationBottom") | Get the allowed price deviation in the decrease direction. |
| [SpreadDiff](imtrequest_spreaddiff.md "SpreadDiff") | Get and set the difference between the symbol spread for the group to which the trader belongs and the current symbol spread (price markup for the group). |
| [SpreadDiffBalance](imtrequest_spreaddiffbalance.md "SpreadDiffBalance") | Get and set the spread difference balance in a trade request. |
| [Comment](imtrequest_comment.md "Comment") | Get and set a comment to a trade request. |
| [ResultRetcode](imtrequest_resultretcode.md "ResultRetcode") | Get the current state of a trade request. |
| [ResultDealer](imtrequest_resultdealer.md "ResultDealer") | Get the login of the dealer processing the request. |
| [ResultDeal](imtrequest_resultdeal.md "ResultDeal") | Get the number of the deal formed as a result of request execution. |
| [ResultOrder](imtrequest_resultorder.md "ResultOrder") | Get the number of the order formed as a result of request execution. |
| [ResultVolume](imtrequest_resultvolume.md "ResultVolume") | Get the deal volume confirmed by a dealer for this request. |
| [ResultVolumeExt](imtrequest_resultvolumeext.md "ResultVolumeExt") | Get the extended accuracy deal volume confirmed by a dealer for this request. |
| [ResultPrice](imtrequest_resultprice.md "ResultPrice") | Get the price used by a dealer to confirm a request. |
| [ResultDealerBid](imtrequest_resultdealerbid.md "ResultDealerBid") | Get the Bid price confirmed by a dealer for this request. |
| [ResultDealerAsk](imtrequest_resultdealerask.md "ResultDealerAsk") | Get the Ask price confirmed by a dealer for this request. |
| [ResultDealerLast](imtrequest_resultdealerlast.md "ResultDealerLast") | Get the Last price confirmed by a dealer for this request. |
| [ResultMarketBid](imtrequest_resultmarketbid.md "ResultMarketBid") | Get the market Bid price when a request is processed by the server. |
| [ResultMarketAsk](imtrequest_resultmarketask.md "ResultMarketAsk") | Get the market Ask price when a request is processed by the server. |
| [ResultMarketLast](imtrequest_resultmarketlast.md "ResultMarketLast") | Get the market Last price when a request is processed by the server. |
| [ResultComment](imtrequest_resultcomment.md "ResultComment") | Get the comment added by a dealer after confirming the request. |
| [IDClient](imtrequest_idclient.md "IDClient") | Get the request ID on the side of the client who has sent the request. |
| [IP](imtrequest_ip.md "IP") | Get and set the IP address the request is sent from. |
| [SourceLogin](imtrequest_sourcelogin.md "SourceLogin") | Get and set the login of the dealer, on whose behalf the request is performed. |
| [Position](imtrequest_position.md "Position") | Get and set a position ticket (unique number) in a MetaTrader 5 platform. |
| [PositionBy](imtrequest_positionby.md "PositionBy") | Get and set the ticket (unique number) of an opposite trade position in a MetaTrader 5 platform. |
| [PositionExternalID](imtrequest_positionexternalid.md "PositionExternalID") | Get and set the ticket (a unique number) of a position in an external trading system. |
| [PositionByExternalID](imtrequest_positionbyexternalid.md "PositionByExternalID") | Get and set the ticket (unique number) of an opposite trade position in an external trading system. |
| [Reason](imtrequest_reason.md "Reason") | Get and set the reason for creating the request. |
| [ApiDataSet](imtrequest_apidataset.md "ApiDataSet") | Set the custom parameter for a trade request. |
| [ApiDataGet](imtrequest_apidataget.md "ApiDataGet") | Get the value of a custom parameter of a trade request. |
| [APIDataUpdate](imtrequest_apidataupdate.md "APIDataUpdate") | Change the custom parameter of a trade request. |
| [APIDataNext](imtrequest_apidatanext.md "APIDataNext") | Get the custom parameter of a trade request by a position. |
| [APIDataRaw](imtrequest_apidataraw.md "APIDataRaw") | Get custom parameters of a trade request as raw data (memory fragment). |
| [APIDataRawMax](imtrequest_apidatarawmax.md "APIDataRawMax") | Get the maximum possible size of custom parameters of a trade request. |
| [ApiDataClear](imtrequest_apidataclear.md "ApiDataClear") | Clear all custom parameters of requests set by an application. |
| [ApiDataClearAll](imtrequest_apidataclearall.md "ApiDataClearAll") | Clear all user settings of trade requests. |

The IMTRequest class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnTradeActions](imtrequest_enum.md "Enumerations") | Type of a trade operation. |
| [EnTradeActionFlags](imtrequest_enum.htm#entradeactionflags) | Additional flags of trade requests. |