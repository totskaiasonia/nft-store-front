// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/common/ERC2981.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMarketplaceContract is ERC721Enumerable, ERC721URIStorage, ERC2981 {
    struct Nft {
        uint256 tokenId;
        string tokenMetadataUrl;
        address creator;
    }
    
    
    uint256[] private allTokensIds;

    mapping(uint256 => Nft) public nfts;
    
    constructor() ERC721("NftAuctions", "NFTA") {

    }

    function mintNFT(address to, uint256 tokenId, string memory _tokenMetadataUrl) public {
        _safeMint(to, tokenId);
        nfts[tokenId] = Nft({
            tokenId: tokenId,
            tokenMetadataUrl: _tokenMetadataUrl,
            creator: msg.sender
        });
        allTokensIds.push(tokenId);
        _setTokenRoyalty(tokenId, msg.sender, 500); // 5% royalty (500 basis points)
        
    }

    function _beforeTokenTransfer(address from, address to, uint256 tokenId, uint256 batchSize) internal override(ERC721Enumerable, ERC721) {
        ERC721Enumerable._beforeTokenTransfer(from, to, tokenId, batchSize);
    }

    function supportsInterface(bytes4 interfaceId) public view override(ERC721Enumerable, ERC2981, ERC721URIStorage) returns (bool) {
        return ERC721Enumerable.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
        delete nfts[tokenId];
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }

    function getAllNFTs() public view returns (Nft[] memory) {
        uint256 total = allTokensIds.length;
        Nft[] memory allNFTs = new Nft[](total);
        for (uint256 i = 0; i < total; i++) {
            uint256 tokenId = allTokensIds[i];
            allNFTs[i] = nfts[tokenId];
        }
        return allNFTs;
    }
}