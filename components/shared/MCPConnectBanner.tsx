import React from 'react';
import { Sparkle, ExternalLink } from 'lucide-react';

const MCPConnectBanner = () => {
  return (
    <div className="relative w-full border-b border-[#E6E6FF] bg-gradient-to-r from-[#4C8DE2] to-[#6C5DD3] dark:border-[#1F344A]">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <Sparkle className="h-5 w-5 text-white" />
          <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
            <span className="text-sm font-medium text-white">
              Announcing MCP Connect - Build and debug Model Context Protocol integrations directly
              in your browser
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://mcp.rconnect.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
          >
            Try MCP Connect
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default MCPConnectBanner;
