# IMTConGateway (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Gateways ](config_gateway.md "Gateways")/ IMTConGateway | [](config_gateway.md "Gateways") [](imtcongateway_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConGateway
The IMTConGateway class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcongateway_release.md "Release") | Delete the current object. |
| [Assign](imtcongateway_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcongateway_clear.md "Clear") | Clear an object. |
| [Name](imtcongateway_name.md "Name") | Get and set the gateway name. |
| [ID](imtcongateway_id.md "ID") | Gets and sets the gateway ID. |
| [Module](imtcongateway_module.md "Module") | Get and set the gateway module name. |
| [TradingServer](imtcongateway_tradingserver.md "TradingServer") | Get and set the address of the server to which the gateway connects. |
| [TradingLogin](imtcongateway_tradinglogin.md "TradingLogin") | Get and set a login for the authorization of a gateway on the source server. |
| [TradingPassword](imtcongateway_tradingpassword.md "TradingPassword") | Get and set a password for the authorization of a gateway on the source server. |
| [Gateway](imtcongateway_gateway.md "Gateway") | Gets the gateway license module name. |
| [GatewayServer](imtcongateway_gatewayserver.md "GatewayServer") | Gets and sets the address, at which the gateway will accept connections from the history and trade servers. |
| [GatewayLogin](imtcongateway_gatewaylogin.md "GatewayLogin") | Gets and sets a login for the authorization of the history and trade servers on the gateway server. |
| [GatewayPassword](imtcongateway_gatewaypassword.md "GatewayPassword") | Gets a password for the authorization of the trade and history server on the gateway. |
| [Mode](imtcongateway_mode.md "Mode") | Get and set the gateway operation mode. |
| [Flags](imtcongateway_flags.md "Flags") | Get and set the gateway operation options. |
| [Timeout](imtcongateway_timeout.md "Timeout") | Get and set the timeout of a gateway before reconnecting. The method is obsolete and is no longer used. |
| [TimeoutReconnect](imtcongateway_timeoutreconnect.md "TimeoutReconnect") | Get and set timeout to wait between attempts to reconnect to an external server. |
| [TimeoutSleep](imtcongateway_timeoutsleep.md "TimeoutSleep") | Get and set timeout to wait between series of attempts to reconnect to an external server. |
| [TimeoutAttempts](imtcongateway_timeoutattempts.md "TimeoutAttempts") | Get and set the number of attempts in the series of reconnections to an external server. |
| [ParameterAdd](imtcongateway_parameteradd.md "ParameterAdd") | Add a gateway parameter. |
| [ParameterUpdate](imtcongateway_parameterupdate.md "ParameterUpdate") | Update a gateway parameter. |
| [ParameterDelete](imtcongateway_parameterdelete.md "ParameterDelete") | Delete a gateway parameter by the index. |
| [ParameterClear](imtcongateway_parameterclear.md "ParameterClear") | Clear the list of gateway parameters. |
| [ParameterShift](imtcongateway_parametershift.md "ParameterShift") | Change the position of a gateway parameter in the list. |
| [ParameterTotal](imtcongateway_parametertotal.md "ParameterTotal") | Get the number of gateway parameters. |
| [ParameterNext](imtcongateway_parameternext.md "ParameterNext") | Get the gateway parameters by the index. |
| [ParameterGet](imtcongateway_parameterget.md "ParameterGet") | Get the gateway parameter by the name. |
| [SymbolAdd](imtcongateway_symboladd.md "SymbolAdd") | Add a symbol, for which the gateway will transmit quotes and process trade operations. |
| [SymbolUpdate](imtcongateway_symbolupdate.md "SymbolUpdate") | Change the symbol with the specified index, for which the gateway transmits quotes and processes trade operations. |
| [SymbolShift](imtcongateway_symbolshift.md "SymbolShift") | Change the position of a symbol in the list of symbols, for which the gateway transmits quotes and processes trade operations. |
| [SymbolDelete](imtcongateway_symboldelete.md "SymbolDelete") | Delete a symbol from the list of symbols processed by the gateway by the index. |
| [SymbolClear](imtcongateway_symbolclear.md "SymbolClear") | Clear the list of symbols processed by the gateway. |
| [SymbolTotal](imtcongateway_symboltotal.md "SymbolTotal") | Get the number of symbol settings in the list of symbols processed by the gateway. |
| [SymbolNext](imtcongateway_symbolnext.md "SymbolNext") | Get a symbol from the list of symbols processed by the gateway by the index. |
| [GroupAdd](imtcongateway_groupadd.md "GroupAdd") | Add a group, trade operations from which will be processed by the gateway. |
| [GroupUpdate](imtcongateway_groupupdate.md "GroupUpdate") | Change the group with a specified index, trade operations of which are processed by the gateway. |
| [GroupShift](imtcongateway_groupshift.md "GroupShift") | Change the position of a group in the list of groups processed by the gateway. |
| [GroupDelete](imtcongateway_groupdelete.md "GroupDelete") | Delete a group with a specified index from the list of groups, trade operations of which are processed by the gateway. |
| [GroupClear](imtcongateway_groupclear.md "GroupClear") | Clear the list of groups, trade operations from which are processed by the gateway. |
| [GroupTotal](imtcongateway_grouptotal.md "GroupTotal") | Get the number of group settings in the list of groups processed by the gateway. |
| [GroupNext](imtcongateway_groupnext.md "GroupNext") | Get a group from the list of groups processed by the gateway by the index. |
| [TranslateAdd](imtcongateway_translateadd.md "TranslateAdd") | Add a setting of the price data transmitted by the gateway. |
| [TranslateUpdate](imtcongateway_translateupdate.md "TranslateUpdate") | Update the price data conversion settings of a gateway. |
| [TranslateDelete](imtcongateway_translatedelete.md "TranslateDelete") | Remove a setting of conversion of data transmitted by the gateway by the index. |
| [TranslateClear](imtcongateway_translateclear.md "TranslateClear") | Clear the list of price data conversion parameters of a gateway. |
| [TranslateShift](imtcongateway_translateshift.md "TranslateShift") | Shift a setting of conversion of price data transmitted by the gateway in the list. |
| [TranslateTotal](imtcongateway_translatetotal.md "TranslateTotal") | Get the number of settings for converting the price data transmitted by the gateway. |
| [TranslateNext](imtcongateway_translatenext.md "TranslateNext") | Get a setting of conversion of price data transmitted by the gateway by the index. |
| [TranslateGet](imtcongateway_translateget.md "TranslateGet") | Gets a price conversion setting applied to the price data transmitted by the gateway based on the specified symbol name in the trading platform. |
| [TranslateGetSource](imtcongateway_translategetsource.md "TranslateGetSource") | Gets a price conversion setting applied to the price data transmitted by the gateway based on the specified symbol name in the data source. |
| [StateConnected](imtcongateway_stateconnected.md "StateConnected") | Get the state of the gateway connection to an external trading system. |
| [StateReceivedTicks](imtcongateway_statereceivedticks.md "StateReceivedTicks") | Request number of price changes ([MTTick](mttick.md "MTTick")) received by the gateway from an external trading system during the current session. |
| [StateReceivedBooks](imtcongateway_statereceivedbooks.md "StateReceivedBooks") | Request number of the Depth of Market changes ([MTBookDiff](mtbook.md "MTBook/MTBookDiff")) received by the gateway from an external trading system during the current session. |
| [StateTrafficIn](imtcongateway_statetrafficin.md "StateTrafficIn") | Request traffic volume received by the gateway during the current session. |
| [StateTrafficOut](imtcongateway_statetrafficout.md "StateTrafficOut") | Request traffic volume sent by the gateway during the current session. |
| [StateTradesTotal](imtcongateway_statetradestotal.md "StateTradesTotal") | Get a number of trades handled by the gateway during the current session. |
| [StateTradesAverageTime](imtcongateway_statetradesaveragetime.md "StateTradesAverageTime") | Get an average time of handling one trade by the gateway. |

The IMTConGateway class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnGatewayMode](imtcongateway_enum.htm#engatewaymode) | The gateway operation mode. |
| [EnGatewayFlags](imtcongateway_enum.htm#engatewayflags) | The gateway operation options. |