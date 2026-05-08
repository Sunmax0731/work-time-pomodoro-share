# テスト計画

- Repo: `work-time-pomodoro-share`
- Domain: IoT
- Rank: 56 / P3 / Score 53
- Idea No: 3
- アイデア名: 作業打刻・Pomodoro共有
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 自動テスト
- Command: `npm test`
- Working directory: `D:\AI\IoT\work-time-pomodoro-share`
- Expected: `dist/validation-result.json`、`dist/web-smoke-result.json`、`dist/work-time-pomodoro-share-docs.zip` が生成される。

## 代表シナリオ
| ID | 期待 |
| --- | --- |
| happy-path | pass |
| missing-required | fail |
| warning | warning |
| mixed-batch | fail |

## 手動テスト
Codex側では未実施。手順はmanual-testとstrict addendumに記載。
