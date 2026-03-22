# IMTOrder (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders")/ IMTOrder | [](trading_order.md "Orders") [](imtorder_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTOrder
The IMTOrder class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtorder_release.md "Release") | Delete the current object. |
| [Assign](imtorder_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtorder_clear.md "Clear") | Clear an object. |
| [Print](imtorder_print.md "Print") | Get the string description of an order. |
| [Order](imtorder_order.md "Order") | Get the ticket of an order. |
| [OrderSet](imtorder_orderset.md "OrderSet") | Set the order ticket. |
| [ExternalID](imtorder_externalid.md "ExternalID") | Get and set the order ID in external trading systems. |
| [Login](imtorder_login.md "Login") | Get and set the login of the client, to whom the order belongs. |
| [Dealer](imtorder_dealer.md "Dealer") | Get and set the login of a dealer, who has processed the order. |
| [Symbol](imtorder_symbol.md "Symbol") | Get and set the order symbol. |
| [Digits](imtorder_digits.md "Digits") | Get and set the number of decimal places in the price of an order. |
| [DigitsCurrency](imtorder_digitscurrency.md "DigitsCurrency") | Get and set the number of decimal places the deposit currency of a client who has placed the order. |
| [ContractSize](imtorder_contractsize.md "ContractSize") | Get and set the contract size of the symbol, for which an order was placed. |
| [State](imtorder_state.md "State") | Get the current state of an order. |
| [StateSet](imtorder_stateset.md "StateSet") | Set the order state. |
| [Reason](imtorder_reason.md "Reason") | Get the reason for placing an order. |
| [ReasonSet](imtorder_reasonset.md "ReasonSet") | Set the order placing reason. |
| [TimeSetup](imtorder_timesetup.md "TimeSetup") | Get and set the order placing time. |
| [TimeSetupMsc](imtorder_timesetupmsc.md "TimeSetupMsc") | Get and set the order placing time in milliseconds. |
| [TimeExpiration](imtorder_timeexpiration.md "TimeExpiration") | Get and set the order expiration time. |
| [TimeDone](imtorder_timedone.md "TimeDone") | Get and set the order execution time. |
| [TimeDoneMsc](imtorder_timedonemsc.md "TimeDoneMsc") | Get and set the order execution time in milliseconds. |
| [Type](imtorder_type.md "Type") | Get and set order type. |
| [TypeFill](imtorder_typefill.md "TypeFill") | Get and set the order filling type. |
| [TypeTime](imtorder_typetime.md "TypeTime") | Get and set the order expiration type. |
| [PriceOrder](imtorder_priceorder.md "PriceOrder") | Get and set the order price. |
| [PriceTrigger](imtorder_pricetrigger.md "PriceTrigger") | Get and set the price, at which a Limit order is placed when the Stop Limit order triggers. |
| [PriceCurrent](imtorder_pricecurrent.md "PriceCurrent") | Get and set the current price of the symbol, for which an order has been placed. |
| [PriceSL](imtorder_pricesl.md "PriceSL") | Get and set the Stop Loss level of an order. |
| [PriceTP](imtorder_pricetp.md "PriceTP") | Get and set the Take Profit level of an order. |
| [VolumeInitial](imtorder_volumeinitial.md "VolumeInitial") | Get and set the initial volume of an order. |
| [VolumeInitialExt](imtorder_volumeinitialext.md "VolumeInitialExt") | Get and set the initial order volume with an extended accuracy. |
| [VolumeCurrent](imtorder_volumecurrent.md "VolumeCurrent") | Get and set the current unfilled volume of an order. |
| [VolumeCurrentExt](imtorder_volumecurrentext.md "VolumeCurrentExt") | Get and set the current unfilled order volume with an extended accuracy. |
| [ExpertID](imtorder_expertid.md "ExpertID") | Get and set the ID of the Expert Advisor, which has placed the order. |
| [PartyID](imtorder_partyid.md "PartyID") | Get and set the account number in the external system. |
| [PositionID](imtorder_positionid.md "PositionID") | Get and set the position ID (ticket) specified in the order. |
| [PositionByID](imtorder_positionbyid.md "PositionByID") | Get and set the ID (ticket) of an opposite position for the order. |
| [Comment](imtorder_comment.md "Comment") | Get and set a comment to an order. |
| [ActivationMode](imtorder_activationmode.md "ActivationMode") | Get the order activation type. |
| [ActivationTime](imtorder_activationtime.md "ActivationTime") | Get the order activation time. |
| [ActivationPrice](imtorder_activationprice.md "ActivationPrice") | Get the price at which the order was activated. |
| [ActivationFlags](imtorder_activationflags.md "ActivationFlags") | Get order activation flags. |
| [ApiDataSet](imtorder_apidataset.md "ApiDataSet") | Set a custom parameter for a trade order. |
| [ApiDataGet](imtorder_apidataget.md "ApiDataGet") | Get the value of a custom parameter of a trade order. |
| [ApiDataClear](imtorder_apidataclear.md "ApiDataClear") | Clear all custom parameters of orders set by an application. |
| [ApiDataClearAll](imtorder_apidataclearall.md "ApiDataClearAll") | Clear all custom settings of trade order. |
| [APIDataUpdate](imtorder_apidataupdate.md "APIDataUpdate") | Change the custom parameter of the trade order. |
| [APIDataNext](imtorder_apidatanext.md "APIDataNext") | Get the custom parameter of the trade order by a position. |
| [RateMargin](imtorder_ratemargin.md "RateMargin") | Get and set the conversion rate of the symbol margin currency to the client's deposit currency, which is used for calculating the margin for an order. |
| [ModificationFlags](imtorder_modificationflags.md "ModificationFlags") | Get the order modification flags. |

The IMTOrder class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnOrderType](imtorder_enum.htm#enordertype) | Types of orders. |
| [EnOrderFilling](imtorder_enum.htm#enorderfilling) | Order filling types. |
| [EnOrderTime](imtorder_enum.htm#enordertime) | Order expiration types. |
| [EnOrderState](imtorder_enum.htm#enorderstate) | Order states. |
| [EnOrderActivation](imtorder_enum.htm#enorderactivation) | Types of order activation. |
| [EnOrderReason](imtorder_enum.htm#enorderreason) | Order creation ways. |
| [EnTradeActivationFlags](imtorder_enum.htm#entradeactivationflags) | Order activation flags. |
| [EnTradeModifyFlags](imtorder_enum.htm#entrademodifyflags) | Order modification flags. |