# GroupUpdateBatch (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupUpdateBatch | [](imtmanagerapi_groupupdate.md "GroupUpdate") [](imtmanagerapi_grouptotal.md "GroupTotal") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupUpdateBatch
Update multiple group configurations.
C++
MTAPIRES IMTManagerAPI::GroupUpdateBatch( IMTConGroup**  configs, // Array of configurations const UINT config_total, // Number of settings in the array MTAPIRES* results // Array of results )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupUpdateBatch( CIMTConGroup[]  configs, // Array of configurations MTRetCode[] results // Array of results )  
---  
Python
ManagerAPI.GroupUpdateBatch( configs // Array of configurations )  
---  
Parameters
configs
[in] A pointer to an array of configurations which you want to add/update.
config_total
[in] The number of configurations in the 'configs' array.
results
[out] An array with the results of each configuration applying on the server.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, an error code will be returned. The [MT_RET_OK](retcodes_successful.md "Successful completion") response code is an indication of successful change sending to a server; change applying results are passed in the 'results' parameter.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If an entry is incorrect, the [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") error code is added to the 'results' array of this entry.
To be able to work with this method, the manager needs to have the [IMTConManager::RIGHT_GRP_DETAILS_MARGIN](imtconmanager_enum.htm#enmanagerrights) and [IMTConManager::RIGHT_GRP_DETAILS_COMMISSION](imtconmanager_enum.htm#enmanagerrights) permissions.
Only the following group parameters can be changed via the manager interface:
  * [IMTConGroup::MarginCall](imtcongroup_margincall.md "MarginCall")
  * [IMTConGroup::MarginStopOut](imtcongroup_marginstopout.md "MarginStopOut")
  * [IMTConGroup::MarginSOMode](imtcongroup_marginsomode.md "MarginSOMode")
  * [IMTConGroup::EnTradeFlags::TRADEFLAGS_SO_COMPENSATION](imtcongroup_enum.htm#entradeflags)
  * [IMTConGroup::Commission*](imtcongroup_commissionadd.md "CommissionAdd"):
  * [IMTConGroup::Symbol*](imtcongroup_symboladd.md "SymbolAdd"):

  * [IMTConGroupSymbol::Path](imtcongroupsymbol_path.md "Path")
  * [IMTConGroupSymbol::SpreadDiff](imtcongroupsymbol_spreaddiff.md "SpreadDiff")
  * [IMTConGroupSymbol::SpreadDiffBalance](imtcongroupsymbol_spreaddiffbalance.md "SpreadDiffBalance")
  * [IMTConGroupSymbol::MarginInitial](imtcongroupsymbol_margininitial.md "MarginInitial")
  * [IMTConGroupSymbol::MaringMaintenance](imtcongroupsymbol_marginmaintenance.md "MarginMaintenance")
  * [IMTConGroupSymbol::MarginHedged](imtcongroupsymbol_marginhedged.md "MarginHedged")
  * [IMTConGroupSymbol::MarginHedged](imtcongroupsymbol_marginhedged.md "MarginHedged")
  * [IMTConGroupSymbol::MarginFlags](imtcongroupsymbol_marginflags.md "MarginFlags")
  * [IMTConGroupSymbol::MarginRateInitial](imtcongroupsymbol_marginrateinitial.md "MarginRateInitial")
  * [IMTConGroupSymbol::MarginRateMaintenance](imtcongroupsymbol_marginratemaintenance.md "MarginRateMaintenance")
  * [IMTConGroupSymbol::MarginRateLiquidity](imtcongroupsymbol_marginrateliquidity.md "MarginRateLiquidity")
  * [IMTConGroupSymbol::MarginRateCurrency](imtcongroupsymbol_marginratecurrency.md "MarginRateCurrency")
  * [IMTConGroupSymbol::SwapMode](imtcongroupsymbol_swapmode.md "SwapMode")
  * [IMTConGroupSymbol::SwapLong](imtcongroupsymbol_swaplong.md "SwapLong")
  * [IMTConGroupSymbol::SwapShort](imtcongroupsymbol_swapshort.md "SwapShort")
  * [IMTConGroupSymbol::Swap3Day](imtcongroupsymbol_swap3day.md "Swap3Day")

All other changes will be ignored.