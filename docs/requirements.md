# 要件定義

- Repo: `work-time-pomodoro-share`
- Domain: IoT
- Rank: 56 / P3 / Score 53
- Idea No: 3
- アイデア名: 作業打刻・Pomodoro共有
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 背景
M5Stack、Android、PCで作業開始、休憩、終了、タイマー状態を共有する。

## 課題
端末ごとに作業状態が違い、集中や中断復帰が途切れる。

## closed alpha要件
- LAN simulator, mock device, CLI, and web dashboardとして実機や本番外部サービスなしで代表フローを確認できる。
- `samples/representative-suite.json`で4代表シナリオを自動検証する。
- MVPだけで止めず、UI/UX、責務分割、運用、配布準備まで整備する。
- 手動テスト未実施を明記し、QCDS最高評価はS-に制限する。
