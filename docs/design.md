# 設計

- Repo: `work-time-pomodoro-share`
- Domain: IoT
- Rank: 56 / P3 / Score 53
- Idea No: 3
- アイデア名: 作業打刻・Pomodoro共有
- 公開先: GitHub Release / 自宅LAN
- Version: 0.1.0-alpha.1

## 3案比較
| 案 | 内容 | 判断 |
| --- | --- | --- |
| A | 実機または外部連携を先に作る | 検証価値は高いがclosed alphaの安全境界が重い |
| B | docsだけを整える | 速いが実際に触れる証跡が弱い |
| C | simulator/mock/static UI + 自動検証 | 実機リスクを抑えて配布準備まで進められる |

## 採用案
案C。Rank 56では安全境界、責務分割、手動テスト導線を先に固める方が、後続の実装差し替えが容易なため。

## UI/UX
最初の画面はランディングではなく、状態、代表データ、主要操作、検証結果を直接扱う画面にする。
