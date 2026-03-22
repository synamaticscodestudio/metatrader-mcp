# Enumerations (MetaTrader5SDK)

|  | [ Configuration Interfaces ](reference_configurations.md "Configuration Interfaces") / [ Funds and ETF ](config_funds.md "Funds and ETF") / [ IMTConFund ](imtconfund.md "IMTConFund")/ Enumerations | [](imtconfund.md "IMTConFund") [](imtconfund_release.md "Release") |
| --- | --- | --- |
| --- | --- |

Enumerations
The [IMTConFund](imtconfund.md "IMTConFund") class contains the following enumerations:
  * [IMTConFund::EnFlags](imtconfund_enum.htm#enflags)
  * [IMTConFund::EnType](imtconfund_enum.htm#entype)
  * [IMTConFund::EnRecalculation](imtconfund_enum.htm#enrecalculation)
  * [IMTConFund::EnFeeMode](imtconfund_enum.htm#enfeemode)
  * [IMTConFund::EnFeePeriod](imtconfund_enum.htm#enfeeperiod)
  * [IMTConFund::EnFeeAssests](imtconfund_enum.htm#enfeeassests)
  * [IMTConFund::EnFeeSuccessCalc](imtconfund_enum.htm#enfeesuccesscalc)
  * [IMTConFund::EnFeeSuccessModes](imtconfund_enum.htm#enfeesuccessmodes)
  * [IMTConFund::EnFeeSuccessHWMType](imtconfund_enum.htm#enfeesuccesshwmtype)

IMTConFund::EnFlags
IMTConFund::EnFlags provides a list of additional fund properties.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FLAG_NONE | 0x00000000 | No flags. |
| FLAG_ENABLED | 0x00000001 | Configuration enabled. |
| FLAG_ALL |  | End of enumeration. It corresponds to enabling of all flags. |

The enumeration is used in the [IMTConFund::Flags](imtconfund_flags.md "Flags") method.
IMTConFund::EnType
Fund types are enumerated in IMTConFund::EnType.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| TYPE_OPEN_END | 0 | Open-end fund. |
| TYPE_CLOSED_END | 1 | Closed-end fund. |
| TYPE_FIRST |  | Beginning of enumeration. Corresponds to TYPE_OPEN_END. |
| TYPE_LAST |  | End of enumeration. Corresponds to TYPE_CLOSED_END. |

The enumeration is used in the [IMTConFund::Type](imtconfund_type.md "Type") method.
IMTConFund::EnRecalculation
IMTConFund::EnRecalculation provides a list of fund chart recalculation modes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| RECALCULATION_MINUTELY | 0 | Every minute. |
| RECALCULATION_HOURLY | 1 | Every hour. |
| RECALCULATION_DAILY | 2 | Every day. |
| RECALCULATION_MANUAL | 3 | Manual. |
| RECALCULATION_FIRST |  | Beginning of enumeration. Corresponds to RECALCULATION_MINUTELY. |
| RECALCULATION_LAST |  | End of enumeration. Corresponds to RECALCULATION_MANUAL. |

The enumeration is used in the [IMTConFund::Recalculation](imtconfund_recalculation.md "Recalculation") method.
IMTConFund::EnFeeMode
IMTConFund::EnFeeMode provides a list of fund management and success fee calculation modes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_MODE_AUTOMATIC | 0 | Automatic, calculated by the platform. |
| FEE_MODE_REPORT | 1 | Manual, based on external data. |
| FEE_MODE_FIRST |  | Beginning of enumeration. Corresponds to FEE_MODE_AUTOMATIC. |
| FEE_MODE_LAST |  | End of enumeration. Corresponds to FEE_MODE_REPORT. |

The enumeration is used in the [IMTConFund::FeeMode](imtconfund_feemode.md "FeeMode") method.
IMTConFund::EnFeePeriod
IMTConFund::EnFeePeriod provides a list of fund management and success fee calculation periods.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_PERIOD_DAILY | 0 | Daily. |
| FEE_PERIOD_MONTHLY | 1 | Monthly. |
| FEE_PERIOD_QUARTERLY | 2 | Quarterly. |
| FEE_PERIOD_ANNUAL | 3 | Annually. |
| FEE_PERIOD_FIRST |  | Beginning of enumeration. Corresponds to FEE_PERIOD_DAILY. |
| FEE_PERIOD_LAST |  | End of enumeration. Corresponds to FEE_PERIOD_ANNUAL. |

The enumeration is used in the [IMTConFund::FeePeriod](imtconfund_feeperiod.md "FeePeriod") method.
IMTConFund::EnFeeAssests
IMTConFund::EnFeeAssests provides a list of fund management fee calculation modes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_ASSETS_END | 0 | Use the asset value as of the end of the period. |
| FEE_ASSETS_BEGIN | 1 | Use the asset value as of the beginning of the period. |
| FEE_ASSETS_AVERAGE | 2 | Use the average asset value over the period. |
| FEE_PERIOD_FIRST |  | Beginning of enumeration. Corresponds to FEE_ASSETS_END. |
| FEE_PERIOD_LAST |  | End of enumeration. Corresponds to FEE_ASSETS_END. |

The enumeration is used in [IMTConFund::FeeManagementAssets](imtconfund_feemanagementassets.md "FeeManagementAssets") method.
IMTConFund::EnFeeSuccessCalc
IMTConFund::EnFeeSuccessCalc provides a list of success fee calculation modes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_SUCCESS_CALC_HURDLE_HWM_SOFT | 0 | Calculate based on the total returns for the period. |
| FEE_SUCCESS_CALC_HURDLE_HWM_HARD | 1 | Calculate based on the returns above the hurdle rate. |
| FEE_SUCCESS_CALC_FIRST |  | Beginning of enumeration. Corresponds to FEE_SUCCESS_CALC_HURDLE_HWM_SOFT. |
| FEE_SUCCESS_CALC_LAST |  | End of enumeration. Corresponds to FEE_SUCCESS_CALC_HURDLE_HWM_HARD. |

The enumeration is used in the [IMTConFund::FeeSuccessCalc](imtconfund_feesuccesscalc.md "FeeSuccessCalc") method.
IMTConFund::EnFeeSuccessModes
IMTConFund::EnFeeSuccessModes provides a list of success fee calculation modes.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_SUCCESS_MODE_BEFORE_MF | 0 | Before management fee calculation. |
| FEE_SUCCESS_MODE_AFTER_MF | 1 | After management fee calculation. |
| FEE_SUCCESS_CALC_FIRST |  | Beginning of enumeration. Corresponds to FEE_SUCCESS_CALC_HURDLE_HWM_SOFT. |
| FEE_SUCCESS_CALC_LAST |  | End of enumeration. Corresponds to FEE_SUCCESS_CALC_HURDLE_HWM_HARD. |

The enumeration is used in the [IMTConFund::FeeSuccessMode](imtconfund_feesuccessmode.md "FeeSuccessMode") method.
IMTConFund::EnFeeSuccessHWMType
The IMTConFund::EnFeeSuccessHWMType enumeration provides a list of modes for determining the fund management success.
| ID | Value | Description |
| --- | --- | --- |
| --- | --- | --- |
| FEE_SUCCESS_HWM_TYPE_FULL | 0 | Exceeding the hurdle rate for the entire period. |
| FEE_SUCCESS_HWM_TYPE_QUATER | 1 | Exceeding the hurdle rate for the last quarter. |
| FEE_SUCCESS_HWM_TYPE_YEAR | 2 | Exceeding the hurdle rate for the last year. |
| FEE_SUCCESS_CALC_FIRST |  | Beginning of enumeration. Corresponds to FEE_SUCCESS_HWM_TYPE_FULL. |
| FEE_SUCCESS_CALC_LAST |  | End of enumeration. Corresponds to FEE_SUCCESS_HWM_TYPE_YEAR. |

The enumeration is used in the [IMTConFund::FeeSuccessHWM](imtconfund_feesuccesshwm.md "FeeSuccessHWM") method.