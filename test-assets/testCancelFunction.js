//http://localhost:3001/#/cancel

module.exports = (pageObject, warrantInfo) => {
    pageObject
        .setValue('@warrantId', warrantInfo.warrantId)
        .setValue('@cancelReason', warrantInfo.header)
        .setValue('@cancelDate', warrantInfo.mke)
        .click('@save')
}