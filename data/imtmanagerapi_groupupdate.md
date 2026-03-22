# GroupUpdate (MetaTrader5SDK)

|  | [ Manager API ](managerapi.md "Manager API") / [ Manager Interface ](imtmanagerapi.md "Manager Interface") / [ Configuration Databases ](imtmanagerapi_config.md "Configuration Functions") / [ Groups ](imtmanagerapi_config_group.md "Groups")/ GroupUpdate | [](imtmanagerapi_groupunsubscribe.md "GroupUnsubscribe") [](imtmanagerapi_groupupdatebatch.md "GroupUpdateBatch") |
| --- | --- | --- |
| --- | --- |

IMTManagerAPI::GroupUpdate
Update group configuration.
C++
MTAPIRES IMTManagerAPI::GroupUpdate( IMTConGroup* group // Group configuration object )  
---  
.NET
MTRetCode CIMTManagerAPI.GroupUpdate( CIMTConGroup group // Group configuration object )  
---  
Python
ManagerAPI.GroupUpdate( group # Group configuration object )  
---  
Parameters
group
[in] An object of group configuration.
Return Value
An indication of successful completion is the [MT_RET_OK](retcodes_successful.md "Successful completion") response code. Otherwise, a corresponding error code will be returned.
Note
A configuration can only be added or updated from the applications running on the main server. For all other applications, the response code [MT_RET_ERR_NOTMAIN](retcodes_api.md "API") is returned.
Before adding, the correctness of the account is checked. If the record is incorrect, the error code [MT_RET_ERR_PARAMS](retcodes_common.md "Common errors") is returned.
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
Also, it is not possible to add ([IMTConGroup::SymbolAdd](imtcongroup_symboladd.md "SymbolAdd")) or delete ([IMTConGroup::SymbolDelete](imtcongroup_symboldelete.md "SymboDelete")) symbols available to the group, via the manager interface. Only the modification of existing symbols is allowed. If you need to add or delete symbols, use the administrator interface ([IMTAdminAPI::GroupUpdate](imtadminapi_groupupdate.md "GroupUpdate")).