function htmlspecialchars(formData) {
    return formData.split('').map(m => m === '<' ? '&lt;'
        : m === '>' ? '&gt;'
            : m === '&' ? '&amp;'
                : m === '"' ? '&quot;'
                    : m).join('')
}