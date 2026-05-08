# work-time-pomodoro-share

作業打刻・Pomodoro共有 の closed alpha prototype。M5Stack、Android、PCで作業開始、休憩、終了、タイマー状態を共有する。

## Status

- Version: 0.1.0-alpha.1
- Rank: 56 / P3 / Score 53
- Domain: IoT
- Public target: GitHub Release / 自宅LAN
- Manual testing: not run by Codex

## Included

- LAN simulator, mock device, CLI, and web dashboard
- core / validators / report / review-model / CLI / UI の責務分割
- happy-path、missing-required、warning、mixed-batch の代表suite
- QCDS、security/privacy、release evidence、docs ZIP

## Commands

```powershell
npm test
npm run serve -- --port 4173
```

Open `http://localhost:4173/app/` for the closed alpha UI.
