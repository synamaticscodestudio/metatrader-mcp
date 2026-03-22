# IMTConGroup (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Groups ](config_group.md "Groups")/ IMTConGroup | [](config_group.md "Groups") [](imtcongroup_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConGroup
The IMTConGroup class contains the following methods:
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtcongroup_release.md "Release") | Delete the current object. |
| [Assign](imtcongroup_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtcongroup_clear.md "Clear") | Clear an object. |
| [Group](imtcongroup_group.md "Group") | Get and set the name of a group, including a path to it in accordance with the hierarchy. |
| [Server](imtcongroup_server.md "Server") | Get and set the ID of the trade server, to which the group is linked. |
| [PermissionFlags](imtcongroup_permissionsflags.md "PermissionsFlags") | Get and set permission flags for the group. |
| [AuthMode](imtcongroup_authmode.md "AuthMode") | Get and set the authorization mode for accounts in the group. |
| [AuthOTPMode](imtcongroup_authotpmode.md "AuthOTPMode") | Get and set authentication mode using one-time passwords. |
| [AuthPasswordMin](imtcongroup_authpasswordmin.md "AuthPasswordMin") | Get and set the minimum password length for accounts in the group. |
| [Company](imtcongroup_company.md "Company") | Get and set the name of the company that services the group. |
| [CompanyPage](imtcongroup_companypage.md "CompanyPage") | Get and set the website address of the company that services the group. |
| [CompanyEmail](imtcongroup_companyemail.md "CompanyEmail") | Get and set the email address of the company that services the group. |
| [CompanySupportPage](imtcongroup_companysupportpage.md "CompanySupportPage") | Get and set the website address of the technical support of the company that services the group. |
| [CompanySupportEmail](imtcongroup_companysupportemail.md "CompanySupportEmail") | Get and set the technical support email address of the company that services the group. |
| [CompanyCatalog](imtcongroup_companycatalog.md "CompanyCatalog") | Get and set the name of the subdirectory that stores the templates of reports, emails, etc. for the company that services this group. |
| [CompanyDepositPage](imtcongroup_companydepositpage.md "CompanyDepositPage") | Get and set the deposit page URL for a group of accounts. |
| [CompanyWithdrawalPage](imtcongroup_companywithdrawalpage.md "CompanyWithdrawalPage") | Get and set the withdrawal page URL for a group of accounts. |
| [Currency](imtcongroup_currency.md "Currency") | Get and set the deposit currency of the group. |
| [CurrencyDigits](imtcongroup_currencydigits.md "CurrencyDigits") | Get the number of digits after the decimal point in the group deposit currency. |
| [CurrencyDigitsSet](imtcongroup_currencydigitsset.md "CurrencyDigitsSet") | Set the number of digits after the decimal point in the group deposit currency. |
| [ReportsMode](imtcongroup_reportsmode.md "ReportsMode") | Get and set the mode of report generation. |
| [ReportsFlags](imtcongroup_reportsflags.md "ReportsFlags") | Get and set the options for sending reports. |
| [ReportsEmail](imtcongroup_reportsemail.md "ReportsEmail") | Get and set the mail server which is used for sending reports to clients in the group. |
| [ReportsSMTP](imtcongroup_reportssmtp.md "ReportsSMTP") | Get and set the address of the SMTP server for sending reports. The method is obsolete and is no longer used. |
| [ReportsSMTPLogin](imtcongroup_reportssmtplogin.md "ReportsSMTPLogin") | Get and set a login for the authorization on the SMTP server that is used for sending reports. The method is obsolete and is no longer used. |
| [ReportsSMTPPass](imtcongroup_reportssmtppass.md "ReportsSMTPPass") | Get and set a password for the authorization on the SMTP server that is used for sending reports. The method is obsolete and is no longer used. |
| [NewsMode](imtcongroup_newsmode.md "NewsMode") | Get and set the mode of news sending to the clients from the group. |
| [NewsCategory](imtcongroup_newscategory.md "NewsCategory") | Get and set the categories of news received by the group. |
| [NewsLangAdd](imtcongroup_newslangadd.md "NewsLangAdd") | Add a language of news that the group will receive. |
| [NewsLangUpdate](imtcongroup_newslangupdate.md "NewsLangUpdate") | Change the language of news that the group will receive. |
| [NewsLangDelete](imtcongroup_newslangdelete.md "NewsLangDelete") | Delete a news language by the index. |
| [NewsLangClear](imtcongroup_newslangclear.md "NewsLangClear") | Clear the list of news languages. |
| [NewsLangTotal](imtcongroup_newslangtotal.md "NewsLangTotal") | Get the number of languages selected for the group. |
| [NewsLangNext](imtcongroup_newslangnext.md "NewsLangNext") | Get the language of news at the position in the list of selected language. |
| [MailMode](imtcongroup_mailmode.md "MailMode") | Get and set the mode of operation of the internal mail system for the group. |
| [TradeFlags](imtcongroup_tradeflags.md "TradeFlags") | Get and set trade options of a group. |
| [TradeTransferMode](imtcongroup_tradetransfermode.md "TradeTransferMode") | Get and set the mode of money transfer between accounts. |
| [TradeInterestrate](imtcongroup_tradeinterestrate.md "TradeInterestrate") | Get and set the annual interest rate on deposits of the group accounts. |
| [TradeVirtualCredit](imtcongroup_tradevirtualcredit.md "TradeVirtualCredit") | Get and set the amount of additional funds that a brokerage company can provide to a client for opening a position with a volume larger than allowed by the client's current funds. |
| [MarginFreeMode](imtcongroup_marginfreemode.md "MarginFreeMode") | Get and set the mode of including floating profit/loss into free margin calculation. |
| [MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode") | Get and set the mode of checking the levels of Stop Out and Margin Call. |
| [MarginCall](imtcongroup_margincall.md "MarginCall") | Get and set the Margin Call level. |
| [MarginStopOut](imtcongroup_marginstopout.md "MarginStopOut") | Get and set the Stop Out level. |
| [MarginFreeProfitMode](imtcongroup_marginfreeprofitmode.md "MarginFreeProfitMode") | Get and set the mode of use of the profit/loss recorded during a trading day in free margin calculation. |
| [MarginMode](imtcongroup_marginmode.md "MarginMode") | Get and set the risk management mode applied for the group. |
| [Margin Flags](imtcongroup_marginflags.md "MarginFlags") | Get and set margin calculation flags. |
| [MarginFloatingLeverage](imtcongroup_marginfloatingleverage.md "MarginFloatingLeverage") | Get the floating margin profile applied to the group. |
| [DemoLeverage](imtcongroup_demoleverage.md "DemoLeverage") | Get and set the default credit leverage for demo accounts opened in the group. |
| [DemoDeposit](imtcongroup_demodeposit.md "DemoDeposit") | Get and set the default amount of deposit for demo accounts opened in the group. |
| [DemoInactivityPeriod](imtcongroup_demoinactivityperiod.md "DemoInactivityPeriod") | Get and set demo account inactivity period, after which open orders and positions from these accounts will be deleted from the platform databases. |
| [LimitHistory](imtcongroup_limithistory.md "LimitHistory") | Get and set the maximum number of days, for which the group can request data on conducted trade operation. |
| [LimitOrders](imtcongroup_limitorders.md "LimitOrders") | Get and set the maximum number of orders that can be simultaneously placed by an account from this group. |
| [LimitSymbols](imtcongroup_limitsymbols.md "LimitSymbols") | Get and set the maximum number of symbols, for which an account can simultaneously receive quotes. |
| [LimitPositions](imtcongroup_limitpositions.md "LimitPositions") | Get and set the maximum number of open positions that can be present simultaneously on a client account from this group. |
| [CommissionAdd](imtcongroup_commissionadd.md "CommissionAdd") | Add a commission setting. |
| [CommissionUpdate](imtcongroup_commissionupdate.md "CommissionUpdate") | Change a commission setting at the specified position. |
| [CommissionDelete](imtcongroup_commissiondelete.md "CommissionDelete") | Delete a commission setting by the index. |
| [CommissionClear](imtcongroup_commissionclear.md "CommissionClear") | Clear the list of commission settings. |
| [CommissionShift](imtcongroup_commissionshift.md "CommissionShift") | Move a commission setting in the list. |
| [CommissionTotal](imtcongroup_commissiontotal.md "CommissionTotal") | Get the number of commission settings for a group. |
| [CommissionNext](imtcongroup_commissionnext.md "CommissionNext") | Get a commission setting by the index. |
| [CommissionGet](imtcongroup_commissionget.md "CommissionGet") | Get a commission setting with the specified name. |
| [SymbolAdd](imtcongroup_symboladd.md "SymbolAdd") | Add a symbol setting for a group. |
| [SymbolUpdate](imtcongroup_symbolupdate.md "SymbolUpdate") | Change a symbol setting for a group at the specified position. |
| [SymbolDelete](imtcongroup_symboldelete.md "SymboDelete") | Delete a symbol setting for a group. |
| [SymbolClear](imtcongroup_symbolclear.md "SymbolClear") | Clear the list of symbols of a group |
| [SymbolShift](imtcongroup_symbolshift.md "SymbolShift") | Move a symbol setting in the list. |
| [SymbolTotal](imtcongroup_symboltotal.md "SymbolTotal") | Get the number of symbol settings for a group. |
| [SymbolNext](imtcongroup_symbolnext.md "SymbolNext") | Get a symbol setting at the specified index. |
| [SymbolGet](imtcongroup_symbolget.md "SymbolGet") | Get a symbol setting at the specified path (with the full specified name). |

The IMTConGroup contains the following enumerations:
| Enumeration | Purpose |
| --- | --- |
| --- | --- |
| [EnPermissionsFlags](imtcongroup_enum.htm#enpermissionsflags) | Flags of group permissions. |
| [EnAuthMode](imtcongroup_enum.htm#enauthmode) | Authorization mode. |
| [EnReportsMode](imtcongroup_enum.htm#enreportsmode) | Report generation modes. |
| [EnReportsFlags](imtcongroup_enum.htm#enreportsflags) | Report generation flags. |
| [EnNewsMode](imtcongroup_enum.htm#ennewsmode) | News mode. |
| [EnMailMode](imtcongroup_enum.htm#enmailmode) | Internal mail system mode. |
| [EnHistoryLimit](imtcongroup_enum.htm#enhistorylimit) | Availability of history for clients. |
| [EnFreeMarginMode](imtcongroup_enum.htm#enfreemarginmode) | Free margin calculation mode. |
| [EnStopOutMode](imtcongroup_enum.htm#enstopoutmode) | Mode of specifying of Margin Call and Stop Out. |
| [EnTradeFlags](imtcongroup_enum.htm#entradeflags) | Trade flags. |
| [EnMarginFreeProfitFlags](imtcongroup_enum.htm#enmarginfreeprofitflags) | Flags of use of floating profit/loss while calculating free margin. |
| [EnAuthOTPMode](imtcongroup_enum.htm#enauthotpmode) | Authentication using one-time passwords. |
| [EnTransferMode](imtcongroup_enum.htm#entransfermode) | Mode of transfer of funds between accounts. |