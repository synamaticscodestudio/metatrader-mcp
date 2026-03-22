# MTConFeeder (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Data Feeds ](config_datafeeds.md "Data Feeds")/ IMTConFeeder | [](config_datafeeds.md "Data Feeds") [](imtconfeeder_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConFeeder
The IMTConFeeder interface contains methods for configuring data feeds.
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconfeeder_release.md "Release") | Delete the current object. |
| [Assign](imtconfeeder_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconfeeder_clear.md "Clear") | Clear an object. |
| [Name](imtconfeeder_name.md "Name") | Get and set the data feed name. |
| [Module](imtconfeeder_module.md "Module") | Get and set the data feed module name. |
| [FeedServer](imtconfeeder_feedserver.md "FeedServer") | Get and set the address of the server to which the data feed connects. |
| [FeedLogin](imtconfeeder_feedlogin.md "FeedLogin") | Get and set a login for the authorization of a data feed on the source server. |
| [FeedPassword](imtconfeeder_feedpassword.md "FeedPassword") | Get and set a password for the authorization of a data feed on the source server. |
| [GatewayServer](imtconfeeder_gatewayserver.md "GatewayServer") | Get and set an address, at which the data feed will receive connections from the history server. |
| [GatewayLogin](imtconfeeder_gatewaylogin.md "GatewayLogin") | Get and set a login for the authorization of the history server on the data feed. |
| [GatewayPassword](imtconfeeder_gatewaypassword.md "GatewayPassword") | Get and set a password for the authorization of the history server on the data feed. |
| [Mode](imtconfeeder_mode.md "Mode") | Get and set the data feed operation mode. |
| [Flags](imtconfeeder_flags.md "Flags") | Get and set flags of types of information, which is received from the data feed. |
| [Keywords](imtconfeeder_keywords.md "Keywords") | Get and set the key words for the news received from a data feed. |
| [Categories](imtconfeeder_categories.md "Categories") | Get and set the category of news received from a data feed. |
| [Timeout](imtconfeeder_timeout.md "Timeout") | Get and set the timeout of a data feed before reconnecting. The method is obsolete and is no longer used. |
| [TimeoutReconnect](imtconfeeder_timeoutreconnect.md "TimeoutReconnect") | Get and set timeout to wait between attempts to reconnect to the source server. |
| [TimeoutSleep](imtconfeeder_timeoutsleep.md "TimeoutSleep") | Get and set timeout to wait between series of attempts to reconnect to the source server. |
| [TimeoutAttempts](imtconfeeder_timeoutattempts.md "TimeoutAttempts") | Get and set the number of attempts in the series of reconnections to the source server. |
| [ParameterAdd](imtconfeeder_parameteradd.md "ParameterAdd") | Add a parameter of a data feed. |
| [ParameterUpdate](imtconfeeder_parameterupdate.md "ParameterUpdate") | Update a parameter of a data feed. |
| [ParameterDelete](imtconfeeder_parameterdelete.md "ParameterDelete") | Delete a parameter of a data feed by its index. |
| [ParameterClear](imtconfeeder_parameterclear.md "ParameterClear") | Clear the list of parameters of a data feed. |
| [ParameterShift](imtconfeeder_parametershift.md "ParameterShift") | Change the position of the data feed parameter in the list. |
| [ParameterTotal](imtconfeeder_parametertotal.md "ParameterTotal") | Get the number of parameters of data feeds. |
| [ParameterNext](imtconfeeder_parameternext.md "ParameterNext") | Get a data feed parameter by the index. |
| [ParameterGet](imtconfeeder_parameterget.md "ParameterGet") | Get a data feed parameter by the name. |
| [SymbolAdd](imtconfeeder_symboladd.md "SymbolAdd") | Add a symbol for which the data feed will transmit quotes. |
| [SymbolUpdate](imtconfeeder_symbolupdate.md "SymbolUpdate") | Change the symbol with a specified index, for which the data feed transmits quotes. |
| [SymbolShift](imtconfeeder_symbolshift.md "SymbolShift") | Change the position of a symbol in the list of symbols transmitted by the data feed. |
| [SymbolDelete](imtconfeeder_symboldelete.md "SymbolDelete") | Remove a symbol from the list of symbols transmitted by the data feed by the index. |
| [SymbolClear](imtconfeeder_symbolclear.md "SymbolClear") | Clear the list of symbols of a data feed. |
| [SymbolTotal](imtconfeeder_symboltotal.md "SymbolTotal") | Get the number of symbol settings in the list transmitted by the data feed. |
| [SymbolNext](imtconfeeder_symbolnext.md "SymbolNext") | Get a symbol from the list of symbols transmitted by the data feed by the index. |
| [TranslateAdd](imtconfeeder_translateadd.md "TranslateAdd") | Add a setting of conversion of data transmitted by the data feed. |
| [TranslateUpdate](imtconfeeder_translateupdate.md "TranslateUpdate") | Update the data conversion settings of the data feed. |
| [TranslateDelete](imtconfeeder_translatedelete.md "TranslateDelete") | Remove a setting of conversion of data transmitted by the data feed by the index. |
| [TranslateClear](imtconfeeder_translateclear.md "TranslateClear") | Clear the list of data conversion parameters of a data feed. |
| [TranslateShift](imtconfeeder_translateshift.md "TranslateShift") | Move a setting of conversion of data transmitted by the data feed in the list. |
| [TranslateTotal](imtconfeeder_translatetotal.md "TranslateTotal") | Get the number of settings for converting data transmitted by the data feed. |
| [TranslateNext](imtconfeeder_translatenext.md "TranslateNext") | Get a setting of conversion of data transmitted by the data feed by the index. |
| [TranslateGet](imtconfeeder_translateget.md "TranslateGet") | Get a setting of conversion of data transmitted by the data feed by the symbol. |
| [StateConnected](imtconfeeder_stateconnected.md "StateConnected") | Get the state of the data feed connection to an external data source. |
| [StateReceivedTicks](imtconfeeder_statereceivedticks.md "StateReceivedTicks") | Request number of price changes ([MTTick](mttick.md "MTTick")), received by the data feed from an external data source during the current session. |
| [StateReceivedBooks](imtconfeeder_statereceivedbooks.md "StateReceivedBooks") | Request number of the Depth of Market changes ([MTBook](mtbook.md "MTBook/MTBookDiff")), received by the data feed from an external data source during the current session. |
| [StateReceivedNews](imtconfeeder_statereceivednews.md "StateReceivedNews") | Request number news ([MTNews](mtnews.md "MTNews")) received by the data feed from an external data source during the current session. |
| [StateTrafficIn](imtconfeeder_statetrafficin.md "StateTrafficIn") | Request traffic volume received by the data feed during the current session. |
| [StateTrafficOut](imtconfeeder_statetrafficout.md "StateTrafficOut") | Request traffic volume sent by the data feed during the current session. |

The IMTConFeeder class contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnFeedersFlags](imtconfeeder_enum.htm#enfeederflags) | Predefined settings of a data feed. |
| [EnFeedersMode](imtconfeeder_enum.htm#enfeedersmode) | The data feed operation mode. |