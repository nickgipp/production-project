import path from "path";
import webpack, { ResolveOptions } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";
import { BuildOptions } from "./types/config";

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
