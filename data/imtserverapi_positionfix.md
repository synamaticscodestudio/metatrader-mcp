# PositionFix (MetaTrader5SDK)

|  | [ Server API ](serverapi.md "Server API") / [ Main API Interface ](imtserverapi.md "Main API Interface") / [ Trade ](serverapi_trading.md "Trade") / [ Positions ](serverapi_trading_position.md "Positions")/ PositionFix | [](imtserverapi_positioncheck.md "PositionCheck") [](imtserverapi_positionsplit.md "PositionSplit") |
| --- | --- | --- |
| --- | --- |

IMTServerAPI::PositionFix
Correcting a client's positions based on the history of his deals.
MTAPIRES IMTServerAPI::PositionFix( const UINT64 login, // The user's login IMTPositionArray* current // Client's positions after correction )  
---  
Parameters
login
[in] The login of a user.
current
[out] The array of the client's positions after correction based on the history. The 'current' object must be first created using the [IMTServerAPI::PositionCreateArray](imtserverapi_positioncreatearray.md "PositionCreateArray") method.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned.
Disclaimer
Upon the call of the method, the platform calculates a client's positions based on the history of his deals, and corrects current positions if necessary.