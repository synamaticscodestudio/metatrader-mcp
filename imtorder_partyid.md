# PartyID (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Orders ](trading_order.md "Orders") / [ IMTOrder ](imtorder.md "IMTOrder")/ PartyID | [](imtorder_expertid.md "ExpertID") [](imtorder_positionid.md "PositionID") |
| --- | --- | --- |
| --- | --- |

IMTOrder::PartyID
Get the account number in the external system.
C++
UINT64 IMTOrder::PartyID() const  
---  
.NET (Gateway/Manager API)
ulong CIMTOrder.PartyID()  
---  
Python
MTOrder.PartyID  
---  
Return Value
Account number in the external system.
Note
This field is used for additional trade monitoring when operating as an Ultency liquidity provider.
When connecting to a liquidity provider in Ultency, a broker is assigned a single omnibus account through which all client orders are routed. By default, the liquidity provider has no information about the initiators of trading operations on the broker's side. If necessary, brokers can optionally transmit the trading account number for each executed operation. This can be done by enabling the '[Send Party ID](https://support.metaquotes.net/en/docs/mt5/platform/administration/ultency/ultency_connect#party_id)' option in connection settings.
The corresponding account numbers will be stored in the new 'Party ID' field in orders and deals routed to the provider. When reviewing trades on a broker's omnibus account, the liquidity provider will be able to distinguish between them.
IMTOrder::PartyID
Set the account number in the external system.
C++
MTAPIRES IMTOrder::PartyID( const UINT64 id // account number )  
---  
.NET (Gateway/Manager API)
MTRetCode CIMTOrder.PartyID( ulong id // account number )  
---  
Python
MTOrder.PartyID  
---  
Parameters
id
[in] Account number in the external system.
Return Value
An indication of success is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error corresponding to the response code has occurred.