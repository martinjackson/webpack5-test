
|---------|----------|----------------|-----------|------------|
| webpack | Time     | Num of Modules | bundle.js | vendor.js  |
| 4.42.0  | 31864 ms |      1749      |  1.61 MiB |  14.1 MiB  |
| 5.3.0   | 24800 ms |      1763      |  1.6  MiB |  10.6 MiB  |
|         | 20224 ms |      1763      |  1.6  MiB |  10.6 MiB  |
|         | 19385 ms |      1765      |  1.6  MiB |  10.6 MiB  |
|---------|----------|----------------|-----------|------------|


-----------

$ npm run build

> invm@0.1.0 build /mnt/c/Apps/home/projects/invm
> cp src/index.html public/ && cp src/NCTR.png public/ && webpack

fullPath(./public/) --> /mnt/c/Apps/home/projects/invm/public/
fullPath(src) --> /mnt/c/Apps/home/projects/invm/src
*************************************************************
**                    Laptop detected                      **
** use http://localhost:8080                         **
** expecting API server running on http://localhost:3300/ **
*************************************************************
Hash: 2b14ff26a24eed9621f6
Version: webpack 4.42.0
Time: 31864ms
Built at: 10/27/2020 8:26:32 AM
        Asset      Size  Chunks                          Chunk Names
    bundle.js  1.61 MiB  bundle  [emitted]        [big]  bundle
bundle.js.map  1.67 MiB  bundle  [emitted] [dev]         bundle
    vendor.js  14.1 MiB  vendor  [emitted]        [big]  vendor
vendor.js.map  14.8 MiB  vendor  [emitted] [dev]         vendor
Entrypoint bundle [big] = vendor.js vendor.js.map bundle.js bundle.js.map
[./src/ApprovalChain.js] 46.5 KiB {bundle} [built]
[./src/Approvals.js] 17.9 KiB {bundle} [built]
[./src/AuthorizedUsers.js] 38.9 KiB {bundle} [built]
[./src/BackOrderReport.js] 16.5 KiB {bundle} [built]
[./src/BldAndRoom.js] 9.63 KiB {bundle} [built]
[./src/CAN.js] 34.3 KiB {bundle} [built]
[./src/CANUsers.js] 44.9 KiB {bundle} [built]
[./src/CatAdjust.js] 43.8 KiB {bundle} [built]
[./src/Catalog.js] 58.6 KiB {bundle} [built]
[./src/CategoryTM.js] 26.9 KiB {bundle} [built]
[./src/CheckOut.js] 72.9 KiB {bundle} [built]
[./src/Defaults.js] 27.6 KiB {bundle} [built]
[./src/Email.js] 18.6 KiB {bundle} [built]
[./src/ExistingOrders.js] 43.5 KiB {bundle} [built]
[./src/index.js] 22 KiB {bundle} [built]
  15 + 1734 hidden modules
mjackson@NCL0196460:/mnt/c/Apps/home/projects/invm
$

---------------

> invm@0.1.0 build /mnt/c/Apps/home/projects/invm
> webpack

******************************************
**          Laptop detected             **
** use http://localhost:8080            **
** expecting API server running on      **
**   http://localhost:3300              **
******************************************
[webpack-cli] Compilation finished
2 assets
1763 modules
webpack 5.3.0 compiled successfully in 24800 ms
mjackson@NCL0196460:/mnt/c/Apps/home/projects/invm
$

ls -lh public/assets/
total 25M
-rwxrwxrwx 1 mjackson mjackson 1.6M Oct 27 12:33 main.js
-rwxrwxrwx 1 mjackson mjackson 1.7M Oct 27 13:11 main.js.map
-rwxrwxrwx 1 mjackson mjackson  11M Oct 27 13:11 vendor.js
-rwxrwxrwx 1 mjackson mjackson  12M Oct 27 13:11 vendor.js.map
mjackson@NCL0196460:/mnt/c/Apps/home/projects/invm
$

ls -l public/assets/
total 25580
-rwxrwxrwx 1 mjackson mjackson  1676732 Oct 27 12:33 main.js
-rwxrwxrwx 1 mjackson mjackson  1745471 Oct 27 13:11 main.js.map
-rwxrwxrwx 1 mjackson mjackson 10878361 Oct 27 13:11 vendor.js
-rwxrwxrwx 1 mjackson mjackson 11883958 Oct 27 13:11 vendor.js.map
mjackson@NCL0196460:/mnt/c/Apps/home/projects/invm
$
