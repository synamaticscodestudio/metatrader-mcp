# EOSRolloverValue (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Trade Requests ](trading_request.md "Trade Requests") / [ IMTExecution ](imtexecution.md "IMTExecution")/ EOSRolloverValue | [](imtexecution_eosrollovervalueshort.md "EOSRolloverValueShort") [](imtexecution_apidataset.md "ApiDataSet") |
| --- | --- | --- |
| --- | --- |

IMTExecution::EOSRolloverValue
Set the rollover size for a position.
C++
MTAPIRES IMTExecution::EOSRolloverValue( const double value_long // Long position rollover const double value_short // Short position rollover )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTExecution.EOSRolloverValue( double value_long // Long position rollover double value_short // Short position rollover )  
---  
Parameters
value_long
[in] Long position rollover set in the client's deposit currency.
value_short
[in] Short position rollover set in the client's deposit currency.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error has occurred that corresponds to the response code.
Note
A symbol the rollover is accrued for is specified in the [IMTExecution::Symbol](imtexecution_symbol.md "Symbol") field. Short and long position rollover values in the value_long and value_short parameters are specified in the client's deposit currency. These values ​​will be added to the current (existing) values ​​of position rollovers in the [IMTPosition::Storage](imtposition_storage.md "Storage") field.
If a zero volume is specified in the [IMTExecution::DealVolume](imtexecution_dealvolume.md "DealVolume") field, specified rollover values are accrued to the positions regardless of their volumes. If a non-zero value is specified in [IMTExecution::DealVolume](imtexecution_dealvolume.md "DealVolume"), the rollover is accrued proportionally: (Specified rollover * Position volume) / (IMTExecution::DealVolume). In other words, we define the volume the specified rollover is applied to. To minimize errors, it is recommended to set rollovers based on 1 lot.
The accuracy of the currency used for rollover accrual is set in the [IMTExecution::Digits](imtexecution_digits.md "Digits") field.
Rollovers can be accrued to a certain client or a client group. First, it is checked whether [IMTExecution::Login](imtexecution_login.md "Login") or [IMTExecution::ExternalAccount](imtexecution_externalaccount.md "ExternalAccount") field is filled in the trade execution. If yes, the accrual is performed for a client with a specified login or account in an external system. If not, the [IMTExecution::Group](imtexecution_group.md "Group") field is checked. This is a field where a group or a mask for the groups, to which rollovers should be accrued, is specified.