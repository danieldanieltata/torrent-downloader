const webtorrentService = require('../services/webtorrent.service');

class DownloadTorrentBL {
    constructor() {
        this.webtorrentService = webtorrentService;
    }

    async startTorrentDownload(magnetUri) {
        return this.webtorrentService.startTorrentDownload(magnetUri);
    }
    
    async getDownloadsStatus() {
        return this.webtorrentService.getDownloadsStatus();
    }
}

module.exports = new DownloadTorrentBL();
