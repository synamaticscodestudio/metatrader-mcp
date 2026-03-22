# OnDealerAnswer (MetaTrader5SDK)

|  | [ Gateway API ](gatewayapi.md "Gateway API") / [ Event Interface ](imtgatewaysink.md "Event Interface")/ OnDealerAnswer | [](imtgatewaysink_ongatewayaccountanswer.md "OnGatewayAccountAnswer") [](imtgatewaysink_ondealerlock.md "OnDealerLock") |
| --- | --- | --- |
| --- | --- |

IMTGatewaySink::OnDealerAnswer
A handler of the event notifying on a request confirmation result.
C++
virtual void IMTGatewaySink::OnDealerAnswer( const MTAPIRES retcode, // Result const IMTConfirm* confirm // Request confirmation object )  
---  
.NET
virtual void CIMTGatewaySink.OnDealerAnswer( MTRetCode retcode, // Result CIMTConfirm confirm // Request confirmation object )  
---  
Parameters
retcode
[in] Request confirmation [result code](reference_retcodes.md "Return Codes"). [MT_RET_OK](retcodes_successful.md "Successful completion") is returned, in case a request is confirmed successfully.
confirm
[in] [Request confirmation object](imtconfirm.md "IMTConfirm").
IMTGatewaySink::OnDealerAnswer
A handler of the event notifying on a request execution result.
C++
virtual void IMTGatewaySink::OnDealerAnswer( const UINT64 login, // Server ID const MTAPIRES retcode, // Result const IMTExecution* execution // Trade execution object )  
---  
.NET
virtual void CIMTGatewaySink.OnDealerAnswer( ulong login, // Server ID MTRetCode retcode, // Result CIMTExecution execution // Trade execution object )  
---  
Parameters
login
[in] Identifier of a server that has executed the request.
retcode
[in] Request execution [result code](reference_retcodes.md "Return Codes"). [MT_RET_OK](retcodes_successful.md "Successful completion") is returned, in case a request is executed successfully.
execution
[in] [Trade execution object](imtexecution.md "IMTExecution").
Note
This event informs about the result of applying a trade execution object [IMTExecution](imtexecution.md "IMTExecution") sent via [IMTGatewayAPI:DealerExecuteAsync](imtgatewayapi_dealerexecuteasync.md "DealerExecuteAsync") to a trade server data base.
Some [types of trade executions](imtexecution_enum.md "Enumerations") are broadcast, which means they are sent to all trade servers simultaneously. As a result of executing such requests, several OnDealerAnswer events are formed. Each event contains the identifier of a server (login parameter) that has executed the request.