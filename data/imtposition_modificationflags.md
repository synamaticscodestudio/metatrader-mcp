# ModificationFlags (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Trade ](reference_trading.md "Trade") / [ Positions ](trading_position.md "Positions") / [ IMTPosition ](imtposition.md "IMTPosition")/ ModificationFlags | [](imtposition_apidatanext.md "APIDataNext") [](imtposition_reason.md "Reason") |
| --- | --- | --- |
| --- | --- |

IMTPosition::ModificationFlags
Gets position modification flags. The flags allow defining if a position was changed manually by an administrator, a manager or by API.
C++
UINT IMTPosition::ModificationFlags() const  
---  
.NET (Gateway/Manager API)
uint CIMTPosition.ModificationFlags()  
---  
Return Value
[IMTPosition::EnTradeModifyFlags](imtposition_enum.htm#entrademodifyflags) enumeration value.
Note
Deals that close a position or part of it inherit its modification flags. After closing, no separate entry about the position remains in the database. To prevent the information about modification from being lost, flags are copied to the deal that closes his position. At the same time, the additional EnTradeModifyFlags::MODIFY_FLAGS_POSITION modification flag is set for the deal 
When inheriting, the deal's flags are also preserved and they are added to the position flags..