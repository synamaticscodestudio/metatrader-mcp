# Groups (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Groups | [](imtconspreadsink_onspreadsync.md "OnSpreadSync") [](imtcongroup.md "IMTConGroup") |
| --- | --- | --- |
| --- | --- |

Configuration of Groups
The MetaTrader 5 API allows managing groups in the trading platform — adding new groups, modifying and deleting existing ones.
The following interfaces of group settings are available:
  * [IMTConGroup](config_group.htm#imtcongroup)
  * [IMTConGroupSymbol](config_group.htm#imtcongroupsymbol)
  * [IMTConGroupArray](imtcongrouparray.md "IMTConGroupArray")
  * [IMTConGroupSink](config_group.htm#imtgroupsink)
  * [IMTConCommTier](config_group.htm#commission)
  * [IMTConCommission](config_group.htm#commission)

The below figure shows different elements of group configuration in the MetaTrader 5 Administrator, to help you understand the purpose of the interfaces:
The following elements are shown above:
  1. [Group name](imtcongroup_group.md "Group").
  2. [The server to which the group is linked](imtcongroup_server.md "Server").
  3. [The type of authorization](imtcongroup_authmode.md "AuthMode").
  4. The [Margin Call](imtcongroup_margincall.md "MarginCall") and [Stop Out](imtcongroup_marginstopout.md "MarginStopOut") levels.
  5. [The group deposit currency](imtcongroup_currency.md "Currency").

Below is a detailed description of the correspondence of methods and group settings in the MetaTrader 5 Administrator.
IMTConGroup
The [IMTConGroup](imtcongroup.md "IMTConGroup") interface provides access to the main group settings. In MetaTrader 5 Administrator, group settings are divided into several tabs:
  * [Common](config_group.htm#common)
  * [Company](config_group.htm#company)
  * [News&Mail](config_group.htm#news_mail)
  * [Permissions](config_group.htm#permissions)
  * [Margin](config_group.htm#margin)
  * [Symbols](config_group.htm#symbols)
  * [Commissions](config_group.htm#commissions)
  * [Reports](config_group.htm#reports)

Common
The following elements are shown above:
  1. [Group name](imtcongroup_group.md "Group").
  2. [Deposit currency](imtcongroup_currency.md "Currency").
  3. [A trade server to which the group is linked](imtcongroup_server.md "Server").
  4. [The type of authorization for the clients in the group](imtcongroup_authmode.md "AuthMode").
  5. [Minimum length of account password](imtcongroup_authpasswordmin.md "AuthPasswordMin").
  6. [Allow accounts from the group to connect to the server](imtcongroup_permissionsflags.md "PermissionsFlags").
  7. [Enable confirmation of certificates](imtcongroup_permissionsflags.md "PermissionsFlags").
  8. [Forced password change upon first connection](imtcongroup_permissionsflags.md "PermissionsFlags").

Company
The following elements are shown above:
  1. [The name of the company that services the group](imtcongroup_company.md "Company").
  2. [The address of the company's website](imtcongroup_companypage.md "CompanyPage").
  3. [The email address of the company](imtcongroup_companyemail.md "CompanyEmail").
  4. [The address of the company's technical support website](imtcongroup_companysupportpage.md "CompanySupportPage").
  5. [The e-mail address for technical support of the company](imtcongroup_companysupportemail.md "CompanySupportEmail").
  6. [A folder of templates of the company](imtcongroup_companycatalog.md "CompanyCatalog").

News&Mail
The following elements are shown above:
  1. [The mode of news sending to the clients from the group](imtcongroup_newsmode.md "NewsMode").
  2. [News categories available to the group](imtcongroup_newscategory.md "NewsCategory").
  3. [News languages available to the group](imtcongroup_newslangadd.md "NewsLangAdd").
  4. [An option of enabling and disabling the internal mail system](imtcongroup_mailmode.md "MailMode").

Permissions
The following elements are shown above:
  1. [Maximum number of symbols available to the group](imtcongroup_limitsymbols.md "LimitSymbols").
  2. [Available trading history](imtcongroup_limithistory.md "LimitHistory").
  3. [A default deposit for demo accounts](imtcongroup_demodeposit.md "DemoDeposit").
  4. [The option enables/disables trading using Expert Advisors](imtcongroup_tradeflags.md "TradeFlags").
  5. [An option for enabling/disabling swap charging](imtcongroup_tradeflags.md "TradeFlags").
  6. [The option enables/disables the use of trailing stop](imtcongroup_tradeflags.md "TradeFlags").
  7. [The maximum number of placed orders at a time](imtcongroup_limitorders.md "LimitOrders").
  8. [The annual interest rate](imtcongroup_tradeinterestrate.md "TradeInterestrate").
  9. [Default leverage for demo accounts](imtcongroup_demoleverage.md "DemoLeverage").
  10. [The option enables/disables the use of the Signals service](imtcongroup_tradeflags.md "TradeFlags").

Margin
The following elements are shown above:
  1. [The Margin Call level](imtcongroup_margincall.md "MarginCall").
  2. [The Stop Out level](imtcongroup_marginstopout.md "MarginStopOut").
  3. [The mode of Margin Call and Stop Out check](imtcongroup_marginsomode.md "MarginSOMode").
  4. [Including floating profit/loss into free margin calculation](imtcongroup_marginfreemode.md "MarginFreeMode").
  5. [Including daily recorded profit into free margin calculation](imtcongroup_marginfreeprofitmode.md "MarginFreeProfitMode").
  6. [The amount of virtual credit](imtcongroup_tradevirtualcredit.md "TradeVirtualCredit").

Symbols
The following elements are shown above:
  1. [Add a symbol configuration](imtcongroup_symboladd.md "SymbolAdd").
  2. [Modify a symbol configuration](imtcongroup_symbolupdate.md "SymbolUpdate").
  3. [Delete a symbol configuration](imtcongroup_symboldelete.md "SymboDelete").

Commissions
The following elements are shown above:
  1. [Add commission configuration](imtcongroup_commissionadd.md "CommissionAdd").
  2. [Modify commission configuration](imtcongroup_commissionupdate.md "CommissionUpdate").
  3. [Delete commission configuration](imtcongroup_commissiondelete.md "CommissionDelete").

Reports
The following elements are shown above:
  1. [An option of enabling/disabling generation of daily reports](imtcongroup_reportsmode.md "ReportsMode").
  2. [An option of enabling/disabling emailing of reports](imtcongroup_reportsflags.md "ReportsFlags").
  3. [Address of SMTP server for sending reports](imtcongroup_reportssmtp.md "ReportsSMTP").
  4. [A login to authorize on the SMTP server](imtcongroup_reportssmtplogin.md "ReportsSMTPLogin").
  5. [A password to authorize on the SMTP server](imtcongroup_reportssmtppass.md "ReportsSMTPPass").
  6. [An option of enabling/disabling sending copies of reports to the technical support mailbox](imtcongroup_reportsflags.md "ReportsFlags").

IMTConGroupSymbol
The IMTConGroupSymbol interface provides access to individual symbol settings for a group. Dialogs of symbol settings for a group are similar to the dialogs of [common symbol settings](config_symbol.htm#imtconsymbol). Therefore, here only some of the group symbol settings from MetaTrader 5 Administrator:
The following elements are shown above:
  1. [Symbols to which settings apply](imtcongroupsymbol_path.md "Path").
  2. [The option of using default spread settings](imtcongroupsymbol_spreaddiffdefault.md "SpreadDiffDefault").
  3. [Spread difference](imtcongroupsymbol_spreaddiff.md "SpreadDiff").
  4. [Spread balance difference](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance").
  5. [Option of using default volume settings](imtcongroupsymbol_volumemindefault.md "VolumeMinDefault").
  6. [Minimal volume](imtcongroupsymbol_volumemin.md "VolumeMin").
  7. [Volume change step](imtcongroupsymbol_volumestep.md "VolumeStep").
  8. [Maximal volume](imtcongroupsymbol_volumemax.md "VolumeMax").

IMTConGroupSink
The [IMTConGroupSink](imtcongroupsink.md "IMTConGroupSink") interface contains handlers of the events of group configuration changes.
IMTConCommTier and IMTConCommission
These interfaces provide access to group commission settings. The [IMTConCommission](imtconcommission.md "IMTConCommission") interface provides access to the main commission settings, and [IMTConCommTier](imtconcommtier.md "IMTConCommTier") — to the settings of commission levels.
The following elements are shown above:
  1. [Commission name](imtconcommission_name.md "Name").
  2. [Description of the commission](imtconcommission_description.md "Description").
  3. [Symbols, for which the commission is charged](imtconcommission_path.md "Path").
  4. [Type of ranges for commission levels](imtconcommission_rangemode.md "RangeMode").
  5. [Type of commission](imtconcommission_mode.md "Mode").
  6. [Adding a commission level](imtconcommission_tieradd.md "TierAdd").
  7. [Editing a commission level](imtconcommission_tierupdate.md "TierUpdate").
  8. [Deleting a commission level](imtconcommission_tierdelete.md "TierDelete").
  9. [Start of a commission level](imtconcommtier_rangefrom.md "RangeFrom").
  10. [End of a commission level](imtconcommtier_rangeto.md "RangeTo").
  11. [Commission amount](imtconcommtier_value.md "Value").
  12. [Maximum commission amount](imtconcommtier_minimal.md "Minimal").
  13. [Method of commission charging](imtconcommtier_mode.md "Mode").
  14. [Commission calculation currency](imtconcommtier_currency.md "Currency").
  15. [Type of commission charging](imtconcommtier_type.md "Type").
