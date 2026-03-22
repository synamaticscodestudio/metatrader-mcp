# Enumerations (MetaTrader5SDK)

|  | [ Database Interfaces ](reference_bases.md "Database Interfaces") / [ Price Data ](reference_ticks.md "Price Data") / [ IMTChartSink ](imtchartsink.md "IMTChartSink")/ Enumerations | [](imtchartsink.md "IMTChartSink") [](imtchartsink_onchartsplit.md "OnChartSplit") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTChartSink](imtchartsink.md "IMTChartSink") class contains the following enumerations:
  * [IMTChartSink::EnSplitRounding](imtchartsink_enum.htm#ensplitrounding)

IMTChartSink::EnSplitRounding
IMTChartSink::EnSplitRounding lists types of rounding used when splitting price data.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| SPLIT_ROUNDING_STANDARD | 0 | Standard rounding. |
| SPLIT_ROUNDING_DOWN | 1 | Rounding down. |
| SPLIT_ROUNDING_UP | 2 | Rounding up. |
| SPLIT_ROUNDING_FIRST |  | Enumeration start. Corresponds to SPLIT_ROUNDING_STANDARD. |
| SPLIT_ROUNDING_LAST |  | Enumeration end. Corresponds to SPLIT_ROUNDING_UP. |

The enumeration is used in the following methods:
  * [OnChartSplit](imtchartsink_onchartsplit.md "OnChartSplit")
  * [HookChartSplit](imtchartsink_hookchartsplit.md "HookChartSplit")
