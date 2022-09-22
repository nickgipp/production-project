import path from "path";
import webpack, { ResolveOptions } from "webpack";
import HTMLWebpackPlugin from "html-webpack-plugin";

export function buildResolvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
