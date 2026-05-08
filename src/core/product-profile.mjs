export const productProfile = {
  "repo": "work-time-pomodoro-share",
  "title": "作業打刻・Pomodoro共有",
  "domain": "IoT",
  "version": "0.1.0-alpha.1",
  "rank": 56,
  "tier": "P3",
  "score": 53,
  "publicTarget": "GitHub Release / 自宅LAN",
  "overview": "M5Stack、Android、PCで作業開始、休憩、終了、タイマー状態を共有する。",
  "problem": "端末ごとに作業状態が違い、集中や中断復帰が途切れる。",
  "differentiation": "1つの作業モードを全端末へ反映し、作業ログとして保存する。",
  "modules": [
    "src/core",
    "src/validators",
    "src/report",
    "src/review-model",
    "src/cli",
    "app",
    "src/simulator",
    "src/device-adapter",
    "src/host-adapter"
  ],
  "manualTestStatus": "not-run",
  "qcdsGrades": {
    "Quality": "S-",
    "Cost": "A+",
    "Delivery": "A+",
    "Satisfaction": "S-"
  },
  "securityBoundaries": [
    "実機なしで検証できるようsample telemetry、mock device、dry-run CLI、Web dashboardに閉じる。",
    "家庭LAN公開時は認証、端末allowlist、危険操作の二段階確認、ログ、復旧手順を必須にする。",
    "カメラ、ファイル、MQTT、自動化、バックアップ、OCR、音声/RSS保存は読み取り、匿名サンプル、dry-runを既定にする。"
  ]
};
