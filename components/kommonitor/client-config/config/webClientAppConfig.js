try {
  
  window.__env = window.__env || {};

  window.__env.appTitle = "KomMonitor Demo";

  // a unique prefix for the respective KomMonitor instance
  // it is used to distuingish between various KomMonitor instances in order to write/read data to/from browser cache
  window.__env.localStoragePrefix = "kommonitor-demo-n52";

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;

  // enable/disable role based access using keycloak
  window.__env.enableKeycloakSecurity = true;

  // keycloak super admin role name
  window.__env.keycloakKomMonitorAdminRoleName = "kommonitor-creator";

  // enable and show/hide switch to toggle basic and advanced mode
  // this feature can hide certain app elements via ID if in basic mode
  // configure elements in admin page app settings via controls-config file
  window.__env.isAdvancedMode = true; // controls if advanced mode is activated on startup
  window.__env.showAdvancedModeSwitch = true; // controls if toggle switch is at all displayed for toggling basinc/advanced mode

  // enable show/hide of favorite selection within the indicator & georesource widget
  window.__env.showFavoriteSelection = true;

  // enable/disable certain tools and functions

  // controls, which filter modes should be active
  // possible values: ["kommonitorRangeFilter", "kommonitorSpatialFilter", "kommonitorThresholdFilter"]
  window.__env.filterModes = ["kommonitorRangeFilter", "kommonitorSpatialFilter", "kommonitorThresholdFilter"];

  // controls whether the bilance tool should visualize temporal trends or not
  window.__env.enableBilanceTrend = true;

  // controls whether the scatter plot should include a bivariate regression line or not
  window.__env.enableScatterPlotRegression = true;

  // controls, which types of georesources should be included
  // possible values for infrastructure georesources: ["aoi", "loi", "poi"]
  window.__env.enabledGeoresourcesInfrastructure = ["aoi", "poi", "loi"];
  // possible values for geoservice georesources: ["wfs", "wms"]
  window.__env.enabledGeoresourcesGeoservices = ["wfs", "wms"];

  // show bar chart label and average line
  window.__env.showBarChartLabel = false;
  window.__env.showBarChartAverageLine = true;

  /*
  PROPERTIES used within greetings window (infoModal component)
  to insert custom LOGO by URL with custom width
  and adjust individual information text
  as well as contact information
  */
  window.__env.customLogoURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAABBCAYAAAADtkxUAAASNXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZppkty4EUb/4xQ+AoDElsfBlhG+gY/vl2RJGmnaY43DKqmrmmSBQC7fAircf/3Twj/4U6q0UGofTVuL/ClaNE8+jPj+ed9TLM/P99D+nEs/Hw/l8yFmDgnv8v7a7uf6yfH64wu9fI6vn4+H/rlDHp+Bvg38GVD8zpkPn+vGZyDJ7/H0+T3o53uz/GE5n3+283O6rvfUr7+XTjBOZTzJIV9JEvmZ/S7CDGTI5L3xM0nNfiQ9n/148eu+il34/vGX4PX2dezi/FwhP4cixG9faL/E6HM81a9j90TojzNK3z7mn0/M9O2bX8TOzjC77+pmaUSqhc+i4meI5xMXEs4iz9car86/yuf+vJTXYImbjB2yuXjtkDRlom2ppJNmsnSf9502Uyz55s57zjvLc2xIz5r3k5Tir2S5i8oJ5CLLJmviGfk+l/TcV5/77TS480lcmRODJb7xp1f46uD/8vo+kJmXLhEeT+rTm+DsVcM0PHP+k6tISLJPTOsT3+cV4i/J+SRWyGB9wjxY4IzrHWLV9KO25MmzcF2NJcS3NVI/nwEIEfeuTIaKpqUb5Z1aij3nnhJxHORnMvMsJS8ykGrNJwUjNyKN5Izs9+Y7PT3X5prfw0ALiQBzpJMalUmySqnUTy+DGppVagm11lZ7HVXrbNJKq6213hyjZpdeeu2t9z669jlklFFHG32MoWNqVgHCqjbtQYeqzslNJ0NPvj25Ys6Vl6yy6mqrr7F0zU357LLrbrvvsXXPk48c2v+008MZR8+86VJKt9x62+13XL3TqDUTK1atWbdhavN71j5Z/Tlr6ZfM/XXW0idrnrHyXNd/ZI3DvX8bIjmcVM8ZGcslkfHuGaCgs+csjlRK9sx5zqJmmqJmspaqJ+ckzxgZLDflaul77n5k7i/zFmr5W3nL/ylzwVP3/8hc8NR9MvfnvH2RtTMfRpEnQd6FHtMoBrANo8xvHKNvSc1oyDbWOCvfWXOmMErNJE/EWORZk5WmUlO9p7TMMja3qDNozfRK3UwR2Jr8nSDZ8yH+1/dNVgSmvtvCLmdWJQ7z7LmXSel52rlFNJYrC4BsYmma7tZX13meRNyclL+1X+MLmWC3ZBTeuoTX9C4u8MX5dOfstq6azZhPTw1Gm3uWPpe2Sp7OkatL966+0lB37NB48d/i337vp+rzsYdFjDU+g1Ljv/3eN8lM0Wd/S9+kX+yQYQPWWN+oP9b30+qcYFlfbiI31kuhibZuqdrsROW2HJ74mwzrv5WrWUY+ty1V2QuQbAqDKfkOG0YD8w8dd8vJ1/jSmQiu0yrtQ27KtOJwCivMZ8wol6j7x3U2NTz8Y/idcvn+vm6fRuWaZbltqnHfbncAL8EKa/8WuTdun7DF+AROJSnAblVO2kuMQByxWrq8qeu6acQU/nN+22oskuhOYcUK3KxOnM/Y7d61kV1Lp65dFiVqAYQAzo7/nkarGYy4tg8Nl+hnG3Uxz3xZAHPrJqkOZcT7dqXG9eb0hnKM2qSfuXH9nCz1UBAk226tt2u9g3ruVARNbJ8haSSh0McngqH9oTrf4jygrqYlykxGbmuDITf1eAc3l5smwT6Wn5nsWkG+K+OEwnpLtzjO5aUL5DyCGsoVwh2tx9mHXFobsOSqlNICbbrjaVFzyKvJ7s6hQslK2E5h2rtXxBGswOKqznVXO0AFkdoyM2uz0dBQ1jdZp67rKYCI0LYt6M2TZczbDrAwCfYsljdwHLfK2Ab4HxLId8fTWSDJs7QMzoLGoF2JAESYi3Q2cPX6ZfCN7quEnaPbTqkg8KrZBshf4eY5z2x1bUimd7kOrBaZwwBGLI1bR++XMLcFpexVDn/lnl1SO3GiN5PqRm6Ac+R4IPe4NZc4h7DwMzRMTMfyeOiFc9KV5gOP5oBfb0bxMYcIU0xIdq1SlvYHPCPgGKmAdFc9s4fR4RfvmKF3D0JLS8BztoxaS8tvGluBienxtH26xDSiRjEQi3ZJg65fi4GA3QxtmpuEdi4po+Grj1hZzoqwb9rjQlFaHyYjUOecdATLBRf1QRbyDmuvxrzzilaVzu0GfBzkMBh9tMajoMa6dk9dShX0sZ+m6Q+2U/6Jzji1hZzbTZFWG5ubjFMmQ2coE3FPGTa1o5uwkE2hCFIyskImEzS6ofqyn6IY4aTyAMuZukGWBi9HG51Zgi8AXesaDViF8oELTVQ4kzto/tQ2Od2uxGHZUJpce6aZgD0uItlV1iFzShdST2eSFlbTyqWPsvdFuSuyfupxdUQHuuWEqAbi5/gCn5fkL9BHoA7FPQzYTZXFj0t8yiY8vasTLb2YS5hza7sQLNLU+80rnhaoYEYaiCi8S+80kPcozLsBczLYq6CQkUXWFvmgDxFajJkaZZj2hZLJZhWkDNizMcA04NVRmUHymYO3GYtQb0IsXFGyz4KhDcHTgg89PWR8wKFNIsTrOtUJbvYIKCHeSSchGXe7piEUft7o+uVrdlQOfJkFINYRJbP1cmAt2gooQxVkMo3tMlYN5HHv0gzVgmqiYzp660y0G8ObM633KzNFBKEMUDt1OdAsoKjEocWAK7w1oVVmkumJzngUUTZGgQKsdcoqMMsKPjebtxBX7n1tJPKQi+cd1EdRrrxpbsSlAQjTZdhh0irufDtVzrWh9zUXOrLpBIiemgY4cx0ZEZ2X92V2A6P4PqaIiJvEd7HGeIgg8ceJVtHQ0J7LYCuUFGS54ug1rouW6gc3SbmtS/XcnsV2WxNjNwpZBAdnW155XEcyA5FBDRwgvaZeJ0dHTeJtHW0VqBddCw/7GG161I+sRP2zggVzTtiMnu/Hu5+O9fqXRO0DNDBoqpDLY8eoeyC8Se3IUzLb3XiDb+qbFoAVeaE4UZJOkA3ABHXyJu+JJchaszdqwmPP2gAXsljR1LtUks3IABjIRW3shMkGNW4gbPA7ND9BWNLdZOhjPwgsXnPOapBBAxxkygY40f5RqEDQurBebbQXKQlddQhgVFf29BfQETlAB1cAFAKACttx5dzRBRfWRMYOtDnMEo0UzwuhQiDBVNfxBVGxDPGVaoCSPMgcpGoQGvTvZN2PO4MTHz2h4ZETFOOjJZi0N9iIx/WAS5I4G56KIc8SeAGdmfoqg0wQDyHmmCUH9QzT9pMX1UTLRSRN1XhJPXXMTRGetDSqAfqNDvhjotna0cF80RGpIJvguvYI9lzaVuN7cKdTLTopOhIAzIBP7win2evOoAnVNnw7qDVRU2LoUiQhfNcIyxaujri3uEF9iBUZzWQiYszp5BD1QUhod0l3E3gXV67EOm39uht3v6FAZGDLQh11FGKEFForYCMOzjYCulWyDXOxMtjtUjXGbQQIsSEAVneciSsAJ3mDq8BIUUjehHkvVoh8aQM3SxKoN8HuVAoKrYGOQTFTiIc00UWRlt/Q0cHqHU3aYfakiDyaDT9km2AZ3e26jD7lS+NjGZjNEsLmPSbuJUnXDMdtNNgkxfCaFPbN6ODlSh1lSIRoWmhN3eomSLws8BtMiSQTkgWyMuuzjaplboi6m6BVOvkeatsDjtMdKyeIEK11sLT0tZs3KgKOhGkSyyUNrqOHzgDBC6h5q6N/TMryIKKDSKHTkQfMMre5N/LsRPRCnlTqOR2AKeY5gy2QA8zIt/DoFgSZ+/MlaA0h1LCoU7VgRa6I28cc0fjiLAdhCkP0hrm9rgARTYH8qo0FJSARaBvswUY8GtVQM+0BApCJ7Lt9G9RKB/4Hht3QE02EBdmnanegnSW6+HWZhzHGNCCKqBiaAx0zxLWfQJ7ELtFO4CKsiVBbNA+dicokn8CIoU/yxfv0unzPZMFcPVFxiwKDhCTRLE4uuLP52dgEqzJuviCxKZ7VfVs3nLlRHF1d2MLq7hyx9/Fc379TD4vXDgwOojAc2uHrcwF4S5QBvcrJy9Cs97UHmZYDm+ggmyk9bp4Wmm5JaGi/gjY3Z1/6fwUwimEG1w6kuQ1EAvimKHy/1HLymmYO9B3FgHsE9iZuC0mF1wHFuPkicuF1+fA1xgBpTzPlnGms2YzRo6NkNJSEew48HiYU5Lh4ozoSjsM1FqVNr2FDmpMTHmhWlAnTzxNTciIaCXCdj5rLlPF0JH0UI+qzUyYkO7mmT9vpqF34Bb9GpCd61xma1j5Ps7z+rVo/vuGEiroJME/Y+UpxGQawYqDdDAj6aMOrOECgH+idiFdoi9d0XKTM26XG3HAwgPqW3pEOvjFFbEJzL+iU2Hqgi1FeE71OfbaN7HRlzH1plHq9pV3kLqSYq3lj5FWjUtYtdZaFVIhedhaUpXAAi4LWQT1N6rtO+BlAn3hu36FB4zd/snL2LckdBc1fzDdp8JPgBlRRQiauBXycdLVUecrxcba+UUbFrQHIlYSOR/cjfLiwoijwOyhy5zpaVCHbgN2BwEklSO4WPL+qAx5fWzGpCOmJ7GRCaJnS3Z44dT61VTCS334NMb5H4vIE01ZP4bLK9alaGtRNt++H0sCGprSL/kFk7teTJxe8Lbw7DsP3HxJKWDFtmLCI54/4MaCGNA/XhPc+u4E4pS/3AwJinv6ltCmOUUBuVlHd0TPS42vcnvszARS0POA/W/vO70zAB0RuByJbCQbVhbv0pAECb8uOtb6pAhwTcqb4Vis16Z3f9nNV9QckGVq0QMs853y1z9nnnDcFZ4tyFn32bi/sd++rsnzMDf2BKkf+NUpkakCKLVoxJogbciDMZb5zQslDhsx8SEe2uey0iBAk+KAwQUUPORrLhXw9axiK9XYV6xB/L0wHr4jvTQg1J+fkVnc2TJSSGVuHWhy0lD+qusTk5uC2mPmjG9tacIhPGBkDZjf0WVSYwgQroRcWcJ3lZOVbCg9exUz/+GuFjTIt8D7q3c0THjyjjw5pFnOlex9NBAExp2FFwCWgqGK652kwG3ZrKQ49IE4eckY3pqM9Lof4AgpVZ0oAcI2o8FRCKgiolbdOxeawBMwZ4MUM+LECGc9kYmHDt28IooqRlw2FaU64WJoHnZEAMLGhnpo9ev+tayDcgXz0EkBnIuL7Ls0K/eAP6O4GIu+z/1QArsXlsHGnhkmeDpQcIAV5uRTDMcDHvQZ//AOQcZW5dkUzwIwjYxCcuH3zHazfjqnbDtWNncVFoORoEOJAyjAjSMdwV53PDh24UGrF7Yq6Q9vkFPjJ5uwEqaJBMq7Fn0rtou/CMKcu2WjqhoOk6oEWhxXugC6dFBY9DgyR46vprzddYbiGdkL6KUC8mm+448SKaXYL4I8GgHJ0HxKBtoC/aCNQFsFHYcBI6Fe4G6z0Pe/TJ0vD46NlSbfr4gncIJ8S8lfQy5nqgzjdMw/yLG5kj0srkDZJJuzocUwYmiFMAtaq71sqTEYObOYG5GxEJaFBBfq5DRqgyBEllDhitiOKy/kQ93AJF6BV1LnAaaWuo4rwJyAIbmQx8pKZUFjIFDo1PapaPB24V9Ad8SQoLYFsZsBiSIHzhqtRrNskOTmNDeyKkDa3Oeh7bo0TAbcOntjQyPTyI/wOYhqbialBNUmklbFfx7c43TfT9uSMS1D8N4I2gGcnKzVieXw3EAfjzO6bMvo6W3z/C6AYScTAQXJVcrhQeHj47bvaiP5bYS16D7FGR+C89nw2cwDjS0gRF8xoVIQeClkxMeL7rhvxdgD17I+E0akeMzf6GFQkueKviZy7EAdt9Bzyd+H7xeuXtCeMJP4Lc5NczkfUM8zkuwhgHmLYZ718h9FDjqt3CiJGtDvNg69CjZDnhgfA563h28HjKCIfoQB1G+LoMdTVYfaONDEcwlL9sbj6ruREAmwwIlCVuAuYC0Wf5YWG5o9s7qDPfF+WO7ntP3ikuUFN6gmG9yc9uS0qBPeP0w/FdSEtdckJicWinuJ7MnMOcuXgyyhE0/8Hgj/GqFCNb78Pf6qwx25IpaLn+jb05+ET0P55yvDn979sXIR4uYHGOx2V4ZoSvl+0J0ujjBveF8+UL/SJEzwD4Ysvw0zm/MsThQTSB3oLcKmvp0SE3b//+Od5DxEUcSsJPHUqj3J1ACkkKz3bp6Wi2QpuGSAENMhNf3h3gtEYXNIpt6PvEBHgJwrppWXflv3tJ1kRjlWMMbjTfUtjlQVtQ7444waFiDz/1yV3p6NJCeGCnoXzgYByV6IBoVFUnZKnZv1h4fsQCteyfv/Bzy/viDelaf8NEa5iel2AiAIAAAAGYktHRAD/AP8A/6C9p5MAAAAJcEhZcwAALiMAAC4jAXilP3YAAAAHdElNRQfiBg8JEiwFhtJgAAAJw0lEQVR42u2de3AV1R3HP/eGvAiUl4LoKkUFLOUxShG6VlPAF1eYe5FSqbWOI91WoFXaYm0HW2pnOhbqtFrb0mYBbS2lAmXuVXpFkEdRFtEWGOVh5KHgljeBAkkIIUn/2BOzOdl7szfcPMg935mdZE/O7p797Wd/55zfOXsSwCXDsgFGAhOBoUAn2p/KgQ+AJcAGU9dqUPKtgAuWvsBC4MsZdP+vAQ+YulaiUEgBGMOyrwU2AldkoA02A4WmrlUoHBpXUFRDCzMUFoARwGMKBZ/AADcChRluh0cNy85SOPgDplCZgauAzysz+APmemUGAAYpE/gDRrliR52UCfwBo6SkgFFSwCgpYJQUMEoKGCUlBYySAkZJAaPUxtRBmSAzFI6EBgNxV9K+WDReqIBRSqQcQHPtl6kqSUm1YZQUMEoKGCUFjFJb7/V0DkdCAxQwSr5gAV4FhihglPzC0ipzsVUc5tKCpQvOx3dfbK0ytCVgyoE9wP+AXJwgU++0XqGmhupzZVBTQzAvH4JNm85sWHa+KFsQOGzq2tk0QhEEiEXj1a0BSzgSKgCuFM/jv7FovOZigVkPbEsh/zeAHgn+dh7nG+e/AutMXTsvPZgBwGTgUaB7UtqKt1JTWXd4Xr+hBHPzALhw4gjlO9+lYscmqk8fAyCQ35n84XdTcNNtBHJy/UCSCzwIfB24xWW7GsOy/wMsBYpMXTuV5GF0AKZJTYEXgNPAPcB0UdVkhSOh9cDYWDReHY6EuuKE9WVY7g1HQv09LrU4Fo3vSwGSbOA+4GHgNuo+DPgoHAnNBYpqAW4KMM+auhZL4W28MwEwy4AnTF1LeGOmrhUDTxmW/QcB1Z2J8pZtfJWq4/an+7mPzOHCuVJKN71OxXvrGzqb8jOUbVjK+Y930m3iVALZOcnu4WbgJcDr4QSAL4htpmHZ001dW5rgVNnAM+Jnrd4CngTCUt5OApbuwCpgmMf5Jie4zr+BfT5ACQATgF8C/Tyy9AXmAQOA7zW10bsnDZ5vLTBJhsWwbAzLzjMsO1sC55gw6Jt+L3B282pKzCc9YXHrwoEdlG59MxksIeFV+/u47OXAy4Zl/zgFW/zTAxaA1eLnXxLAcrHqKkD8RwJY3JoRjoQKm+JhqoC9LmMGaPy7poBH2ihgErBUfNt9I2AAY0X9WWVY9hrgsVqoTF07Z1j2FGCXj2tSsfWNugJk55Iz6FZyrr6emspKyt6OU33yUF11tjlOx8EjvWAZBLwM5LuSdwA/ExDlAGOAWeItrL3fXxiWfcjUtRd92LSny7ZvCc8wRPwOsAH4SPz+gHjQtVqZ4AU+4PO6t7v2jwJ/x1kKZTDwLcnO04F/pQpMsalr51z7I4A1jRyTlwCiIsOyT4o6Pezh7cYBAwzLHly7soKpa7sNy34DuMtPYQP5nel4S5j8zw0jmF/waXrOlX0oWTAbqKmrnt7fJMMSxFmkwP2B27vAaKmR+5Jh2cuFpyh03d9vDctea+qan4e3CpgRi8Z3uaoLRON3rivtDgmYhbFofOlFeprdwNPA32LReIXrWmXAD1z5vtQUD/OhtD8Q6HgRLnF1I3n6ATqwzpW2xQ8w+SPHUzDidoK5+Q27hj16EezWi+qTh+s80rYGVdc4YLhrvxJ4yKtHZOpaqWHZk4GdQDeR3Bn4kXghkulx4NdyrygWjbdEz3QaMD8WjVd6/C0mAdM7HAl1TLUNI7u/oS1wU5+R9k/4OSi33xBPWGodQFa3+j32qlNH5UzflPZXmrq2M0kD/TDwRyn5ftG7Sqa4DEtLKRaNz0sAC4Dt9R6mCsz7Hh6gOXXCo6HbPy1nzspK1tANiu6lW6/5OOtyab+L6IJfiqrySkwVmF3S/g3NWOBq4GH3cmKGZXfFWX+vuXW1eNjJqmMvbRNVl1vtanWMVIFx95ByRJ29EtgqgnDpUiXwoKlrr0jpzyQJAqa7yynrdGMHmbp2AZADd/ntCZhUGr0H3W+7iMqOcwFUILrL04C7E3Sn/agEmGzq2mqpmpgJTGkhu5zxSOve2EEizFAgJZdmKjDbG3m7SoEVwArDsscAf8ZZ2SkVvQdMNHVtj/QQfipiHy2lT4BzUkhgIPB6I8dd59FrLM7UKmmv34ymrq3BWe83lajwfGCkBEtP4JUWhgVT1yqBt6XksAgyJpM8dHEKZ5XOjPQwowzL3gj0crnd0wKKdcALpq6dcBndNix7Ak6wKy/JeSuA75i6Nl9y72Np3dU9F1F/zeJbRUzISlAd5eAMkrq1WB5QTbMK2rKHuUEY7DrxEK8QXdwQ8Cug2LDsO6Q3dTvwuyTnPASMcsMixpJ+gxM5bc2lYBcBH0u2etGw7N4esADMoW54oLbtMifNZZIb3mPkDOFIKBiOhG4TA4ut6mEaUw9guWHZA01d+8SVXoQTMZRvYDPwFVPXbJfhO4i3tCewOMF1hkkPprmqpXLDsqcKcIOuuNM7hmXPFumlOCO6s3CmB7j1hKlr+9NcrPXUjz5/LRwJ7RVtq9qYz1dFOW8itWkoLQ4MOOMuU6Q2x27RiLzGlbYBuEsal6rtls5tpCfybEsAI8qz0rDsGcBzLuA1YIGIE1VRf6qCu/v/+2Yo0gKcRahr52JkAbPFJushYEZrx2H86GbJ6AAHpTwfyLC0VZm69rx4a0942E6G5SwwFXhc3HdaFYvGi4UHbmwooQZn1J+27mGg4diPl/oaln1vE8/vGTntcFV/gt3qmjyB7ORDOB0u93qg8UTQLDMsey3wXeB+UYag6+EcwJkG8ZypaweTXLYKZ2Q6S4IsFf0J2A/8XFTPteWoFukrcGbxbfVo/6xM4TrlHvkrA4ZlzwMeSSMwy0xdmyQ1CPcC17ZxZ/JtU9eKGssk7ucy0c4KCM9zpKX/jY6Y/tBTbJXAMaCkuUe5m8PDvCPtXwb0aS9xCFHVHBdbq0mAcVRsbbJb7UenhDt0awJqtfF2o1SAWYX3GIsblkmmrh2XusnfV2ZuP/JbJX0IjMcZJ7kHZ8ZbH5xIYwnO/FPT1LVDciyC5p0CodRGgZklQtzncSKgi3w0Du+jhceAlNoGMLuBqN8Tik9Efgg8pdoumQlMP2CLYdlFOB+B7/cKShmW3QWI4ExqVv+sKsOrpMHA82I7YFj2duCIqKI64sRYhlMXslbKcGDcuob640JKqlutpJQYmHJlBqDhbH+lBMBsUWYAUpiCmunArCfBR0sZpFIaju4qeQEjZrwtyXA7mKaunVE4+G/0zsSZX5uJ2gL8RKGQAjBi0s9oGn473Z5VjbNYz+h0rlHX3lVvYrYYXR6PE7H9LN7zVS91leBMQF8ilkRTSkH/ByAE45spCdDLAAAAAElFTkSuQmCC"; // image format allows all types usable within HTML <img> tag
  window.__env.customLogo_onClickURL = "https://52north.org/"; // uses <a> tag to insert clickable link on logo
  window.__env.customLogoWidth = "35px"; // height is fixed to 35px; so adjust your custom width to keep aspect ratio
  window.__env.customGreetingsContact_name = "Sebastian Drost";
  window.__env.customGreetingsContact_organisation = "52°North";
  window.__env.customGreetingsContact_mail = "s.drost@52north.org";
  window.__env.customGreetingsTextInfoMessage = ""; // as HTML; only set if you want to give users some extra hints; if empty will be ignored
  

  /*
  PROPERTIES used within special modal (spatialUnitNotification component)
  to show a customizable HTMLText only when user selects a certian spatial unit for any indicator
  */
  window.__env.enableSpatialUnitNotificationSelection = false; // controls if a notification should be shown when selecting certain spatial units
  window.__env.enableSpatialUnitNotificationButton = false; // enables button to manually open spatial unit notification
  window.__env.spatialUnitNotificationSelection = ["Baublockebene", ""]; // unit(s) for which the notification is shown
  window.__env.spatialUnitNotificationTitle = "Informationsverlust auf kleinräumigen Ebenen (Bau- und Mittelblock)"; // title of the notification window
  window.__env.spatialUnitNotificationMessage = "<p align='justify'>Alle Daten, die im KomMonitor-Portal dargestellt werden, halten die statistische Geheimhaltung ein. Das bedeutet, dass Angaben zu einzelnen Personen nicht offengelegt werden, insbesondere auch, wenn aus aggregierten Werten R&uuml;ckschl&uuml;sse zu Einzelangaben erm&ouml;glicht werden. Aus diesem Grund werden Indikatorenwerte, die in einem r&auml;umlichen Aggregat eine absolute Fallzahl von &lt; 3 Einwohnern aufweisen, so behandelt, als h&auml;tten diese 0 Einwohner.<br />\
    Diese Methode der statistischen Geheimhaltung kann zu einem teilweise hohen Informationsverlust auf kleinr&auml;umigen Ebenen f&uuml;hren.<br />\
    Dies l&auml;sst sich daran erkennen, dass die Fallzahlen insgesamt niedrig sind und viele Gebiete 0-Werte haben. Eine fl&auml;chendeckendes Bild ist somit nicht m&ouml;glich.<br />\
    Dennoch bieten diese Indikatoren die M&ouml;glichkeit, &quot;Hot-Spots&quot; und &quot;Cluster&quot; der jeweiligen Indikatoren zu ermitteln.<br />\
    Zahlen auf kleinr&auml;umige Ebenen sollten vor diesem Hintergrund <b>vorsichtig</b> und <b>sorgf&auml;ltig</b> interpretiert werden.</p>"; // message shown when previous spatial unit is selected

  /*
  PROPERTIES used within extended info  modal (second tab) to show a customizable HTMLText
  */
  window.__env.enableExtendedInfoModal = false; // controls if an extra tab should be shown in the info modal. 
  window.__env.standardInfoModalTabTitle = "Informationen zu KomMonitor" // title of the first tab
  window.__env.extendedInfoModalTabTitle = "Weitere Informationen"  // title of the second tab
  window.__env.extendedInfoModalHTMLMessage = "";  // message in the second tab as HTML

  // property names of feature id and name (relevant for all spatial features) - KomMonitor specific
  // DO NOT CHANGE THEM - ONLY IF YOU REALLY KNOW WHAT YOU ARE DOING
  window.__env.FEATURE_ID_PROPERTY_NAME = "ID";
  window.__env.FEATURE_NAME_PROPERTY_NAME = "NAME";
  window.__env.VALID_START_DATE_PROPERTY_NAME = "validStartDate";
  window.__env.VALID_END_DATE_PROPERTY_NAME = "validEndDate";
  window.__env.indicatorDatePrefix = "DATE_";

  // Data Management API URL
  // window.__env.apiUrl = 'http://kommonitor.fbg-hsbo.de/';
  window.__env.apiUrl = 'https://demo.kommonitor.de/data-management/';
  // Base url for Data Management API
  window.__env.basePath = 'management';

  // Processing Engine URL
  window.__env.targetUrlToProcessingEngine = 'https://demo.kommonitor.de/data-processing/processing/';

  // Open Route Service URL
  window.__env.targetUrlToReachabilityService_ORS = 'https://ors5.fbg-hsbo.de';
  // window.__env.targetUrlToReachabilityService_ORS = 'http://localhost:8082';

  // Open Trip Planner URL - currently not integrated
  window.__env.targetUrlToReachabilityService_OTP = 'http://localhost:8090/opentripplanner';

  // Data Imporret URL
  window.__env.targetUrlToImporterService = 'https://demo.kommonitor.de/data-importer/importer/';

  // KomMonitor Geocoder Proxy
  window.__env.targetUrlToGeocoderService = 'https://geocoder.fbg-hsbo.de/nominatim/';

  // KomMonitor Spatial Data Processor
  window.__env.targetUrlToSpatialDataProcessorInstance = 'https://demo.kommonitor.de/spatial-processor/';
  window.__env.spatialDataProcessor_processName_indicatorReachabilityStatistics = "isochrone-prune";

  // optional geometry simplification (a feature of Data Management API)
  window.__env.simplifyGeometriesParameterName = "simplifyGeometries";
  // allowed values and meaning:
  // ["original" --> no simplification; "weak" --> weak simplification,
  // "medium" --> medium simplification; "strong" --> string simplification]
  window.__env.simplifyGeometriesOptions = [{"label": "nein", "value": "original"}, {"label": "schwach", "value": "weak"}, {"label": "mittel", "value": "medium"}, {"label": "stark", "value": "strong"}];
  // use strong as default to minimize size of queried features
  // for display, strong simplification is okay
  window.__env.simplifyGeometries = "original";

  // number of decimals for display of numeric values in app
  window.__env.numberOfDecimals = 2;

  // starting viewpoint parameters and zoom level
  window.__env.initialLatitude = 51.4386432;
  window.__env.initialLongitude = 7.0115552;
  window.__env.initialZoomLevel = 12;
  // window.__env.minZoomLevel = 11;
  window.__env.minZoomLevel = 5;
  window.__env.maxZoomLevel = 18;

  window.__env.baseLayers = [ // baseLayers of instance; first will be set as default starting layer
    // {
    //   name: "",  // display name
    //   url: "", // URL to layer
    //   layerType: "TILE_LAYER", // TILE_LAYER | TILE_LAYER_GRAYSCALE | WMS
    //   layerName_WMS: "", // only relevant for layers of type WMS - multiple layers comma-separated
    //   attribution_html: "", // attribution info displayed at the bottom of the map as HTML string
    //   minZoomLevel: window.__env.minZoomLevel, // min zoom level for this layer (number between 1-20)
    //   maxZoomLevel: window.__env.maxZoomLevel // max zoom level for this layer (number between 1-20, greater than minZoomLevel)
    // },
    {
      name: "Open Street Map - Graustufen", 
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", 
      layerType: "TILE_LAYER_GRAYSCALE", 
      layerName_WMS: "", 
      attribution_html: "Map data © <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },
    {
      name: "Open Street Map - Farbe", 
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      layerType: "TILE_LAYER", 
      layerName_WMS: "", 
      attribution_html: "Map data © <a href='http://openstreetmap.org'>OpenStreetMap</a> contributors", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },
    {
      name: "basemap.de (grau)", 
      url: "https://sgx.geodatenzentrum.de/wms_basemapde?", 
      layerType: "WMS", 
      layerName_WMS: "de_basemapde_web_raster_grau", 
      attribution_html: "GeoBasis-DE / BKG (2024) CC BY 4.0", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },
    {
      name: "basemap.de (Farbe)", 
      url: "https://sgx.geodatenzentrum.de/wms_basemapde?", 
      layerType: "WMS", 
      layerName_WMS: "de_basemapde_web_raster_farbe", 
      attribution_html: "GeoBasis-DE / BKG (2024) CC BY 4.0", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },    
    {
      name: "RVR Stadtplan", 
      url: "https://geodaten.metropoleruhr.de/spw/spw_web?", 
      layerType: "WMS", 
      layerName_WMS: "spw_web", 
      attribution_html: "Map data © <a href='https://geodaten.metropoleruhr.de'>https://geodaten.metropoleruhr.de</a>", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },
    {
      name: "RVR Stadtplan - Graublau", 
      url: "https://geodaten.metropoleruhr.de/spw2?", 
      layerType: "WMS", 
      layerName_WMS: "spw2_graublau",
      attribution_html: "Map data © <a href='https://geodaten.metropoleruhr.de'>https://geodaten.metropoleruhr.de</a>", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    },
    {
      name: "NRW Digitale Topographische Karte", 
      url: "https://www.wms.nrw.de/geobasis/wms_nw_dtk?", 
      layerType: "WMS", 
      layerName_WMS: "nw_dtk_sw", 
      attribution_html: "Map data © <a href='https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/'>Geobasis NRW</a>", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: 20 
    },
    {
      name: "NRW Digitale Orthophotos (Luftbilder)", 
      url: "https://www.wms.nrw.de/geobasis/wms_nw_dop?",
      layerType: "WMS",
      layerName_WMS: "nw_dop_rgb", 
      attribution_html: "Map data © <a href='https://www.bezreg-koeln.nrw.de/brk_internet/geobasis/'>Geobasis NRW</a>", 
      minZoomLevel: window.__env.minZoomLevel, 
      maxZoomLevel: window.__env.maxZoomLevel 
    }
  ];


  // starting indicator and spatial unit
  // if faulty values are provided, a random indicator will be displayed
  window.__env.initialIndicatorId = "48a18455-6a52-4e74-bdbf-99237187fc5c";
  window.__env.initialSpatialUnitName = "Stadtteilebene";

 // various color settings
  window.__env.defaultColorForNoDataValues = "rgba(255,255,255,0)";
  window.__env.defaultBorderColorForNoDataValues = "black";
  window.__env.defaultColorForOutliers_high = "#191919";
  window.__env.defaultBorderColorForOutliers_high = "black";
  window.__env.defaultFillOpacityForOutliers_high = "0.7";
  window.__env.defaultColorForOutliers_low = "#4f4f4f";
  window.__env.defaultBorderColorForOutliers_low = "black";
  window.__env.defaultFillOpacityForOutliers_low = "0.7";
  window.__env.defaultColorForHoveredFeatures = "#e01414";
  window.__env.defaultColorForClickedFeatures = "#42e5f4";
  window.__env.defaultColorForZeroValues = "#bababa";
  window.__env.defaultBorderColor = "black";
  window.__env.defaultColorForFilteredValues = "rgba(255,255,255,0)";
  window.__env.defaultBorderColorForFilteredValues = "black";
  window.__env.defaultFillOpacity = "0.7";
  window.__env.defaultFillOpacityForFilteredFeatures = "0.7";
  window.__env.defaultFillOpacityForZeroFeatures = "0.7";
  window.__env.defaultFillOpacityForNoDataFeatures = "0.7";
  window.__env.defaultFillOpacityForHighlightedFeatures = "0.8";
  window.__env.useTransparencyOnIndicator = true;
  window.__env.useOutlierDetectionOnIndicator = true;
  window.__env.classifyZeroSeparately = true;
  window.__env.classifyUsingWholeTimeseries = true;
  window.__env.useNoDataToggle = false; // true = hide no data values, false = show no data values

  // default color for specific classification as ColorBrewer palette name
  // i.e. balance mode
  // i.e. measure of value classification (German: Schwellwertklassifizierung)
  window.__env.defaultColorBrewerPaletteForBalanceIncreasingValues = "Purples";
  window.__env.defaultColorBrewerPaletteForBalanceDecreasingValues = "YlOrBr";
  window.__env.defaultColorBrewerPaletteForGtMovValues = "YlOrBr";
  window.__env.defaultColorBrewerPaletteForLtMovValues = "Blues";

  // classification
  //allowesValues: equal_interval, quantile, jenks
  window.__env.defaultClassifyMethod = "equal_interval";
  window.__env.disableManualClassification = false;

  // array of indicator name substring that shal be used to filter out / hide certain indicators by their name
  // e.g. set ["entwicklung"] to hide all indicators whose name contains the substring "entwicklung"
  window.__env.arrayOfNameSubstringsForHidingIndicators = []; 
  window.__env.arrayOfNameSubstringsForHidingGeoresources = [];

  // e-mail recipient for feedback mail
  window.__env.feedbackMailRecipient = "s.drost@52north.org";

  // config array of available options for choosing update interval of indicators
  window.__env.updateIntervalOptions = [
    {
        displayName: "jährlich",
        apiName: "YEARLY"
    },
    {
        displayName: "halbjährlich",
        apiName: "HALF_YEARLY"
    },
    {
        displayName: "vierteljährlich",
        apiName: "QUARTERLY"
    },
    {
        displayName: "monatlich",
        apiName: "MONTHLY"
    },
    {
      displayName: "wöchentlich",
      apiName: "WEEKLY"
    },
    {
      displayName: "täglich",
      apiName: "DAILY"
    },
    {
        displayName: "beliebig",
        apiName: "ARBITRARY"
    }
  ];

  // config array of available options for choosing creation type of indicators
  window.__env.indicatorCreationTypeOptions = [
    {
        displayName: "manuell",
        apiName: "INSERTION"
    },
    {
        displayName: "automatisierte Berechnung durch KomMonitor",
        apiName: "COMPUTATION"
    }
  ];

  // config array of available options for choosing indicator's unit
  window.__env.indicatorUnitOptions = [ "Anzahl", "Anteil", "Prozent", "Einwohner", "m", "m²", "km", "km²", "ha", "dimensionslos", "standardisiert", "z-transformierte Werte"
  ];

  // config array of available options for choosing indicator type of indicators
  window.__env.indicatorTypeOptions = [
    {
        displayName: "Status-Indikator (absolut)",
        apiName: "STATUS_ABSOLUTE"
    },
    {
        displayName: "Status-Indikator (relativ)",
        apiName: "STATUS_RELATIVE"
    },
    {
        displayName: "Dynamik-Indikator (absolut)",
        apiName: "DYNAMIC_ABSOLUTE"
    },
    {
        displayName: "Dynamik-Indikator (relativ)",
        apiName: "DYNAMIC_RELATIVE"
    },
    {
        displayName: "Status-Indikator (standardisiert)",
        apiName: "STATUS_STANDARDIZED"
    },
    {
        displayName: "Dynamik-Indikator (standardisiert)",
        apiName: "DYNAMIC_STANDARDIZED"
    }
    
  ];

  // array of available WMS datasets
  window.__env.wmsDatasets = [
    // {
    //   title: "Title of WMS dataset",
    //   description: "Description as HTML code (HTML tags allowed)",
    //   url: "URL including '?' as last character (i.e. https://wms.example/myWMS)",
    //   topicReference: "3af3b65e-4792-4998-8531-54616564b5bc", // id of georesource topic to hang in the WMS entry 
    //   layerName:"laerm"	// name of WMS layer to display
    // },
    {
      title: "KITAS NRW",
      description: "Kindertageseinrichtungen in NRW</b>",
      url: "https://www.wms.nrw.de/wms/kitas?",
      topicReference: null,
      layerName:"kitas"	
    },
    {
      title: "Bodennutzung - Bebauungsplanumringe",
      description: "Umringe der Bebauungspl&auml;ne gem&auml;&szlig; geodaten.metropoleruhr.de",
      url: "https://geodaten.metropoleruhr.de/inspire/bodennutzung/metropoleruhr?",
      topicReference: null,
      layerName: "bplan"
    }
  ];

  // array if available WFS datasets
  window.__env.wfsDatasets = [    
    // {
    //   title: "Title of dataset",
    //   description: "Description as HTML code (HTML tags allowed)",
    //   url: "URL of dataset including '?' as last character (i.e. https://wfs.example/myWfS?)",
    //   featureTypeNamespace: "namespace of featureType",
    //   featureTypeName: "name of featureType",  // // check GetCapabilities Response
    //   featureTypeGeometryName: "name of geometry property of feature type", // check DescribeFeature Response
    //   geometryType: "AOI", // POI|LOI|AOI
    //   poiSymbolColor: "white", // ['white', 'red', 'orange', 'beige', 'green', 'blue', 'purple', 'pink', 'gray', 'black']
    //   poiMarkerColor: "red", // ['white', 'red', 'orange', 'beige', 'green', 'blue', 'purple', 'pink', 'gray', 'black']
    //   poiSymbolBootstrap3Name: "home",
    //   loiColor: "#00aabb", // color for LOI datasets
    //   loiWidth: 3, // 1 - 5
    //   loiDashArrayString: "", // e.g. "20, 20" for equal dash/space visuals
    //   aoiColor: "#00aabb", // color for AOI datasets
    //   filterFeaturesToMapBBOX: false, // applies BBOX filter to WFS request - if not supported by WFS may lead to error
    //   filterEncoding: { // only one filter is currently implemented (PropertyIsEqualTo)
    //     // PropertyIsEqualTo: {
    //     //   propertyName: undefined,  // name of property
    //     //   propertyValue: undefined  // value of property
    //   // }
    //   },
    //   topicReference: "c712af89-ff11-40ff-ad84-b3592901e085"  // id of georesource topic entry which shall be used to display the WFS dataset entry 
    // },
  ];

} catch (error) {
  console.error("Error while evaluating app config. Error is: \n" + error);
} 
