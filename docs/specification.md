# 仕様

- Repo: `work-time-pomodoro-share`
- Domain: IoT
- Rank: 56 / P3 / Score 53
- Idea No: 3
- アイデア名: 作業打刻・Pomodoro共有
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## フロー
1. サンプルデータを読み込む。
2. 代表カード、状態、主要操作を確認する。
3. 警告、失敗、手動確認待ちを同じ画面で読む。
4. 手動テスト手順へ進む。

## データ
- `samples/representative-suite.json`: happy-path / missing-required / warning / mixed-batch。
- `samples/sample-telemetry.json`: mock deviceとsample telemetry。

## 安全境界
- 実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。
- 家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。
- カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。
