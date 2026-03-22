# IMTConFund (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF")/ IMTConFund | [](config_funds.md "Funds and ETF") [](imtconfund_enum.md "Enumerations") |
| --- | --- | --- |
| --- | --- |

IMTConFund
The IMTConFund class contains methods for obtaining and changing [fund settings](https://support.metaquotes.net/en/docs/mt5/platform/administration/fund_etf#common):
| Method | Purpose |
| --- | --- |
| --- | --- |
| [Release](imtconfund_release.md "Release") | Delete the current object. |
| [Assign](imtconfund_assign.md "Assign") | Assign a passed object to the current one. |
| [Clear](imtconfund_clear.md "Clear") | Clear an object. |
| [Name](imtconfund_name.md "Name") | Get and set the fund name. |
| [Symbol](imtconfund_symbol.md "Symbol") | Get and set the name of the symbol used for displaying the value of one share. |
| [SymbolPerfomance](imtconfund_symbolperfomance.md "SymbolPerfomance") | Get and set the name of the symbol used for displaying the current value of assets. |
| [SymbolAssets](imtconfund_symbolassets.md "SymbolAssets") | Get and set the name of the symbol used for displaying the fund yield. |
| [Server](imtconfund_server.md "Server") | Get and set the identifier of the trade server on which the fund is managed. |
| [Manager](imtconfund_manager.md "Manager") | Get and set the login of the manager responsible for the fund. |
| [Flags](imtconfund_flags.md "Flags") | Get and set additional fund properties. |
| [Type](imtconfund_type.md "Type") | Get and set the fund type. |
| [Recalculation](imtconfund_recalculation.md "Recalculation") | Get and set fund chart recalculation mode. |
| [StartDate](imtconfund_startdate.md "StartDate") | Get and set the fund operation start date. |
| [EndDate](imtconfund_enddate.md "EndDate") | Get and set the fund operation end date. |
| [MaxCapital](imtconfund_maxcapital.md "MaxCapital") | Get and set the maximum allowable investment amount for a fund. |
| [Currency](imtconfund_currency.md "Currency") | Get and set the currency in which the maximum allowable fund investment amount is specified. |
| [MaxInvestors](imtconfund_maxinvestors.md "MaxInvestors") | Get and set the maximum allowable number of investors who can purchase shares in the fund. |
| [FeeMode](imtconfund_feemode.md "FeeMode") | Get and set the fund management and success fee calculation mode. |
| [FeePeriod](imtconfund_feeperiod.md "FeePeriod") | Get and set the fund management and success fee calculation period. |
| [FeeAccount](imtconfund_feeaccount.md "FeeAccount") | Get and set the account to which the fund management and success fees are charged. |
| [FeeManagementType](imtconfund_feemanagementtype.md "FeeManagementType") | Get and set the type of fund management fee. The method is currently not used. |
| [FeeManagementValue](imtconfund_feemanagementvalue.md "FeeManagementValue") | Get and set the fund management fee amount. |
| [FeeManagementAssets](imtconfund_feemanagementassets.md "FeeManagementAssets") | Get and set the fund management fee calculation mode. |
| [FeeSuccessCalc](imtconfund_feesuccesscalc.md "FeeSuccessCalc") | Get and set the success fee calculation mode. |
| [FeeSuccessMode](imtconfund_feesuccessmode.md "FeeSuccessMode") | Get and set the time for calculating the success fee in relation to the management fee charges. |
| [FeeSuccessValue](imtconfund_feesuccessvalue.md "FeeSuccessValue") | Get and set the success fee amount. |
| [FeeSuccessHWM](imtconfund_feesuccesshwm.md "FeeSuccessHWM") | Get and set the period for which the excess of the hurdle rate is determined when assessing the fund management success. |
| [FeeSuccessHurdleRate](imtconfund_feesuccesshurdlerate.md "FeeSuccessHurdleRate") | Get and set the hurdle rate. |
| [StateCurrentInvestors](imtconfund_statecurrentinvestors.md "StateCurrentInvestors") | Get the current number of fund investors. |
| [StateCurrentCaptital](imtconfund_statecurrentcaptital.md "StateCurrentCaptital") | Get the current amount of capital invested into the fund. |
| [AccountAdd](imtconfund_accountadd.md "AccountAdd") | Add a fund manager account. |
| [AccountUpdate](imtconfund_accountupdate.md "AccountUpdate") | Update a fund manager account. |
| [AccountDelete](imtconfund_accountdelete.md "AccountDelete") | Delete a fund manager account. |
| [AccountClear](imtconfund_accountclear.md "AccountClear") | Clear the list of fund managers. |
| [AccountShift](imtconfund_accountshift.md "AccountShift") | Change the position of a manager account in the list. |
| [AccountTotal](imtconfund_accounttotal.md "AccountTotal") | Get the number of fund managers. |
| [AccountNext](imtconfund_accountnext.md "AccountNext") | Get a fund manager by index. |
| [InvestorAdd](imtconfund_investoradd.md "InvestorAdd") | Add an investor for a fund. |
| [InvestorUpdate](imtconfund_investorupdate.md "InvestorUpdate") | Edit a fund investor. |
| [InvestorDelete](imtconfund_investordelete.md "InvestorDelete") | Delete an investor from the fund. |
| [InvestorClear](imtconfund_investorclear.md "InvestorClear") | Clear the list of fund investors. |
| [InvestorShift](imtconfund_investorshift.md "InvestorShift") | Change the position of a fund investor in the list. |
| [InvestorTotal](imtconfund_investortotal.md "InvestorTotal") | Get the number of fund investors. |
| [InvestorNext](imtconfund_investornext.md "InvestorNext") | Get a fund investor by index. |

The IMTConFund class contains the following enumerations:
| Enumeration | Description |
| --- | --- |
| --- | --- |
| [EnFlags](imtconfund_enum.htm#enflags) | Additional properties of the fund. |
| [EnType](imtconfund_enum.htm#entype) | Fund types. |
| [EnRecalculation](imtconfund_enum.htm#enrecalculation) | Fund chart recalculation modes. |
| [EnFeeMode](imtconfund_enum.htm#enfeemode) | Fund management and success fee calculation modes. |
| [EnFeePeriod](imtconfund_enum.htm#enfeeperiod) | Fund management and success fee calculation periods. |
| [EnFeeAssests](imtconfund_enum.htm#enfeeassests) | Fund management fee calculation modes. |
| [EnFeeSuccessCalc](imtconfund_enum.htm#enfeesuccesscalc) | Success fee calculation modes. |
| [EnFeeSuccessModes](imtconfund_enum.htm#enfeesuccessmodes) | Success fee calculation modes. |
| [EnFeeSuccessHWMType](imtconfund_enum.htm#enfeesuccesshwmtype) | Modes for determining the fund management success. |