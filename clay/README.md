# 软陶（Clay）主题分支

这个仓库是 [WizisCool/oh-my-cpa](https://github.com/WizisCool/oh-my-cpa) 的副本，默认分支 `clay` = 上游版本 + 软陶主题。

## 文件
- `clay/clay-theme.patch`：软陶主题相对上游的全部改动（不含自动任务本身）。
- `.github/workflows/clay-sync-build.yml`：自动同步编译任务。

## 自动更新怎么运作
1. 每天 10:00（北京时间，02:00 UTC）检查上游最新 release。
2. 如果本仓库还没有 `<版本>-clay` 的 release，就拉取上游该版本源码，打上 `clay-theme.patch`。
3. 打补丁成功 → 编译前端、跑快速检查、按上游同样的参数编译 linux amd64/arm64 程序，发布 release `<版本>-clay`（附 sha256 校验和源码包）。
4. 打补丁失败或编译失败 → 在本仓库开一个 issue（如「软陶主题合并失败：v0.3.7」），GitHub 会通知你。此时旧版本不受影响。
5. 也可以在 Actions 页手动运行，可指定版本、强制重编。

## 部署到 VPS
release 不会自动装到 VPS。下载 `oh-my-cpa-linux-amd64`，核对 sha256，备份旧程序后替换并重启 OMC 服务。

## 修改主题
改好代码后重新生成补丁：`git diff <上游tag> HEAD -- . ':!clay' ':!.github/workflows/clay-sync-build.yml' > clay/clay-theme.patch`。
