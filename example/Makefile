LANGUAGES = en nb

FILES = entry.js

PO_FILES = $(LANGUAGES:%=local/%.po)

BUILD_LANG ?= en

all: bundle.js

bundle.js: $(FILES) local/$(BUILD_LANG).po
	browserify -t [jedify -l $(BUILD_LANG)] entry.js > bundle.js

messages.po: $(FILES)
	xgettext \
		$(FILES) \
		--output messages.po \
		--language python \
		--omit-header \
		--keyword=_p:1,2 \

local/:
	test -d local || mkdir local

$(PO_FILES): messages.po local/
	touch $@
	msgmerge --lang $(basename $(notdir $@)) $@ messages.po --update

clean:
	rm messages.po
	rm bundle.js

.PHONY: all clean
