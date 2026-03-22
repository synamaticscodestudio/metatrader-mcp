# IMTPosition (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions")/ IMTPosition | [](trading_position.md "Positions") [](imtposition_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTPosition
The IMTPosition class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtposition_release.md "Release") | Delete the current object. |
| [Assign](imtposition_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtposition_clear.md "Clear") | Clear an object. |
| [Print](imtposition_print.md "Print") | Get the string description of a position. |
| [Login](imtposition_login.md "Login") | Get the login of the client, to whom the trade position belongs. |
| [LoginSet](imtposition_loginset.md "LoginSet") | Set the login of the client, to whom the trade position belongs. |
| [Symbol](imtposition_symbol.md "Symbol") | Get and set the symbol of a trade position. |
| [Action](imtposition_action.md "Action") | Get and set the type of a position. |
| [Digits](imtposition_digits.md "Digits") | Get and set the number of decimal places in the price of a position. |
| [DigitsCurrency](imtposition_digitscurrency.md "DigitsCurrency") | Get and set the number of decimal places the deposit currency of a client who has opened the position. |
| [ContractSize](imtposition_contractsize.md "ContractSize") | Get and set the contract size of the symbol, for which a position is opened. |
| [Position](imtposition_position.md "Position") | Get the ticket (a unique number) of a trade position in the MetaTrader 5 platform. |
| [ExternalID](imtposition_externalid.md "ExternalID") | Get and set the ticket (a unique number) of a position in an external trading system. |
| [TimeCreate](imtposition_timecreate.md "TimeCreate") | Get and set the position creation time. |
| [TimeUpdate](imtposition_timeupdate.md "TimeUpdate") | Get and set the time of the last modification of a trade position. |
| [TimeCreateMsc](imtposition_timecreatemsc.md "TimeCreateMsc") | Get and set position creation time in milliseconds. |
| [TimeUpdateMsc](imtposition_timeupdatemsc.md "TimeUpdateMsc") | Get and set the time of the last modification of a trade position in milliseconds. |
| [PriceOpen](imtposition_priceopen.md "PriceOpen") | Get and set the weighted average open price of a position. |
| [PriceCurrent](imtposition_pricecurrent.md "PriceCurrent") | Get and set the current price of the symbol, for which a position has been opened. |
| [PriceSL](imtposition_pricesl.md "PriceSL") | Get and set the Stop Loss level of a trade position. |
| [PriceTP](imtposition_pricetp.md "PriceTP") | Get and set the Take Profit level of a trade position. |
| [Volume](imtposition_volume.md "Volume") | Get and set the volume of a trade position. |
| [VolumeExt](imtposition_volumeext.md "VolumeExt") | Get and set the trade position volume with an extended accuracy. |
| [Profit](imtposition_profit.md "Profit") | Get and set the current profit/loss of a trade position. |
| [Storage](imtposition_storage.md "Storage") | Get and set the swap size for a position. |
| [RateProfit](imtposition_rateprofit.md "RateProfit") | Get and set the exchange rate of the profit currency of a position to the deposit currency of a client group. |
| [RateMargin](imtposition_ratemargin.md "RateMargin") | Get and set the exchange rate of the margin currency of a position to the client's deposit currency. |
| [ExpertID](imtposition_expertid.md "ExpertID") | Get and set the ID of the Expert Advisor that has opened the position. |
| [ExpertPositionID](imtposition_expertpositionid.md "ExpertPositionID") | Get and set the position ID. |
| [Comment](imtposition_comment.md "Comment") | Get and set a comment to a position. |
| [Dealer](imtposition_dealer.md "Dealer") | Get and set the login of a dealer, who has processed the order that opened the position. |
| [ActivationMode](imtposition_activationmode.md "ActivationMode") | Get and set the position activation type. |
| [ActivationTime](imtposition_activationtime.md "ActivationTime") | Get and set the position activation time. |
| [ActivationPrice](imtposition_activationprice.md "ActivationPrice") | Get and set the position activation price. |
| [ActivationFlags](imtposition_activationflags.md "ActivationFlags") | Get and set position activation flags. |
| [ApiDataSet](imtposition_apidataset.md "ApiDataSet") | Set the custom parameter for a position. |
| [ApiDataGet](imtposition_apidataget.md "ApiDataGet") | Get the value of a custom parameter of a position. |
| [ApiDataClear](imtposition_apidataclear.md "ApiDataClear") | Clear all custom parameters of positions set by an application. |
| [ApiDataClearAll](imtposition_apidataclearall.md "ApiDataClearAll") | Clear all custom parameters of positions. |
| [APIDataUpdate](imtposition_apidataupdate.md "APIDataUpdate") | Update a custom parameter for a position. |
| [APIDataNext](imtposition_apidatanext.md "APIDataNext") | Get a custom parameter of a trade position by the parameter position. |
| [ModificationFlags](imtposition_modificationflags.md "ModificationFlags") | Get position modification flags. |
| [Reason](imtposition_reason.md "Reason") | Get the reason for position opening. |
| [ReasonSet](imtposition_reasonset.md "ReasonSet") | Set the reason for opening a position. |
| [PriceGateway](imtposition_pricegateway.md "PriceGateway") | Get and set the price at which the position is actually opened through the gateway in the external trading system, excluding the gateway price translation settings. |
| [VolumeGatewayExt](imtposition_volumegatewayext.md "VolumeGatewayExt") | Get and set the volume at which the position is actually routed to an external trading system through the gateway. |
| [ActionGateway](imtposition_actiongateway.md "ActionGateway") | Get and set the direction with which the position is actually routed to an external trading system through the gateway. |

The IMTPosition class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnPositionAction](imtposition_enum.htm#enpositionaction) | Position type. |
| [EnActivation](imtposition_enum.htm#enactivation) | Type of position activation. |
| [EnTradeActivationFlags](imtposition_enum.htm#entradeactivationflags) | Flags of position activation. |
| [EnTradeModifyFlags](imtposition_enum.htm#entrademodifyflags) | Position modification flags. |