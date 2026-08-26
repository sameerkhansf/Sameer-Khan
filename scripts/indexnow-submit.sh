#!/bin/zsh

# IndexNow Submission Script
# Usage: ./scripts/indexnow-submit.sh [url1] [url2] ...
# If no URLs provided, submits all site pages

INDEXNOW_KEY="505e7f8bf1c9482aa778af60aa569a43"
SITE_URL="https://samkhan.net"
KEY_LOCATION="${SITE_URL}/${INDEXNOW_KEY}.txt"

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get all blog post URLs from content directory
get_all_urls() {
    echo "${SITE_URL}"
    echo "${SITE_URL}/blog"
    echo "${SITE_URL}/resume"
    
    # Add blog posts
    for file in content/blog/*.mdx; do
        if [ -f "$file" ]; then
            slug=$(basename "$file" .mdx)
            echo "${SITE_URL}/blog/${slug}"
        fi
    done
}

# Build JSON payload from URLs
build_payload() {
    local url_list=""
    
    while IFS= read -r url; do
        if [ -n "$url" ]; then
            if [ -n "$url_list" ]; then
                url_list+=","
            fi
            url_list+="\"${url}\""
        fi
    done
    
    cat <<EOF
{
    "host": "samkhan.net",
    "key": "${INDEXNOW_KEY}",
    "keyLocation": "${KEY_LOCATION}",
    "urlList": [${url_list}]
}
EOF
}

# Submit to IndexNow
submit_to_indexnow() {
    local payload="$1"
    local endpoint="https://api.indexnow.org/indexnow"
    
    echo "${YELLOW}Submitting to IndexNow...${NC}"
    echo ""
    
    response=$(curl -s -w "\n%{http_code}" -X POST "$endpoint" \
        -H "Content-Type: application/json; charset=utf-8" \
        -d "$payload")
    
    http_code=$(echo "$response" | tail -n1)
    body=$(echo "$response" | sed '$d')
    
    if [ "$http_code" = "200" ] || [ "$http_code" = "202" ]; then
        echo "${GREEN}Success! HTTP ${http_code}${NC}"
        echo "${GREEN}URLs submitted to IndexNow. Search engines will be notified.${NC}"
    else
        echo "${RED}Failed! HTTP ${http_code}${NC}"
        echo "Response: $body"
    fi
}

# Main
echo ""
echo "IndexNow URL Submission"
echo "=========================="

if [ $# -eq 0 ]; then
    echo "Collecting all site URLs..."
    urls=$(get_all_urls)
else
    urls=$(printf '%s\n' "$@")
fi

echo ""
url_count=$(echo "$urls" | wc -l | tr -d ' ')
echo "URLs to submit (${url_count} total):"
echo "$urls" | while read -r url; do
    echo "  - $url"
done
echo ""

payload=$(echo "$urls" | build_payload)
submit_to_indexnow "$payload"
echo ""
