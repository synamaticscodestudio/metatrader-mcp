# Floating Margin (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces")/ Floating Margin | [](imtconcommtier_currency.md "Currency") [](imtconleverage.md "IMTConLeverage") |
| --- | --- | --- |
| --- | --- |

Floating Margin
In this section, you can configure a list of rules for quick adjustments of client leverages/margin. You can create several profiles and quickly switch between them in the group settings. Thus, the platform enables the implementation of a dynamic leverage, often referred to as a floating leverage, which adjusts based on different conditions. For example, leverage and margin values may vary depending on the volume of positions on the client account, on the day of the week or other conditions. For further details, please see [MetaTrader 5 Administrator documentation](https://support.metaquotes.net/ru/docs/mt5/platform/administration/leverages).
The interfaces described in this section enable the management of floating margin configurations:
  * [IMTConLeverage](imtconleverage.md "IMTConLeverage"): get and update a floating margin configuration.
  * [IMTConLeverageArray](imtconleveragearray.md "IMTConLeverageArray"): work with the array of floating margin configurations.
  * [IMTConLeverageRule](imtconleveragerule.md "IMTConLeverageRule"): get and update floating margin configuration rules.
  * [IMTConLeverageTier](imtconleveragetier.md "IMTConLeverageTier"): get and update levels in a floating margin rule.
  * [IMTConLeverageSink](imtconleveragesink.md "IMTConLeverageSink"): track and intercept events related to changes in floating margin configurations.
