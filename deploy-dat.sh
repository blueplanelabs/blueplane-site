hugo
hugo --config config.toml,config-dat.toml
cp -R .dat public-dat/
cd public-dat
dat sync
