# 手動テスト

- Repo: `work-time-pomodoro-share`
- Domain: IoT
- Rank: 56 / P3 / Score 53
- Idea No: 3
- アイデア名: 作業打刻・Pomodoro共有
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 状態
Codex側では手動テスト未実施。

## 環境
- Working directory: `D:\AI\IoT\work-time-pomodoro-share`
- Command: `npm run serve -- --port 4173`
- URL: `http://localhost:4173/app/`

## 手順
1. sample telemetryの状態が表示される。
2. 主要操作がdry-runとして記録される。
3. LAN公開前の認証、allowlist、危険操作抑止、ログ、復旧手順を確認する。
4. 実機や家庭LAN公開前にsecurity/privacy checklistの認証、allowlist、危険操作、復旧手順を確認する。
5. カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存に該当する場合はdry-runから始める。

## 期待結果
主要画面がblankでなく、主要操作が反応し、警告と手動確認待ちが隠れない。
